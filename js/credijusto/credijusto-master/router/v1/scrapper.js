const path = require('path')
const request = require('request')
const cheerio = require('cheerio')
const express = require('express')
const router = new express.Router()

const { isAuthenticated } = require(path.resolve(
  'router/v1/lib/middleware-functions'
))

const options = {
  url:
    'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/2018-10-18/2018-10-18',
  headers: {
    'Bmx-Token':
      '7af92ebd8bb577956096c3c491af103a377c89d62449e3776396ee8c888beda0',
  },
}

const Scrap = require(path.resolve('models/Scrap'))

// Scrapping from DOF
const getDOF = () => {
  return new Promise((resolve) => {
    request(
      'http://www.banxico.org.mx/tipcamb/tipCamMIAction.do',
      (error, response, html) => {
        if (error) {
          console.error(error)
          resolve(false)
        }
        const $0 = cheerio.load(html)
        const row = $0('.renglonNon')
          .find('td')
          .next()
          .next()
          .first()
        const value = row.text().trim()
        const lastUpdated = Date.now()
        resolve({ value: parseFloat(value), lastUpdated })
      }
    )
  })
}

const getFixer = () => {
  // API request to Fixer.io
  return new Promise((resolve) => {
    request(
      'http://data.fixer.io/api/latest?access_key=b2b8ec9cd1b85aadbaa43d1f87234669&format=1&symbols=MXN,USD',
      (error, response) => {
        if (error) {
          console.error(error)
          resolve(false)
        }
        const rates = JSON.parse(response.body).rates
        const { MXN, USD } = rates
        const exchangeRate = MXN / USD
        const lastUpdated = Date.now()
        resolve({ value: exchangeRate, lastUpdated })
      }
    )
  })
}

const getBMX = () => {
  // API request for Banxico
  return new Promise((resolve) => {
    request(options, (error, response) => {
      if (error) {
        console.error(error)
        resolve(false)
      }
      const bmx = JSON.parse(response.body).bmx
      const value = bmx.series[0].datos[0].dato
      const lastUpdated = Date.now()
      resolve({ value: parseFloat(value), lastUpdated })
    })
  })
}

router.route('/scrapper/scrap').post((req, res) => {
  // Create new Scrapping entry
  Promise.all([getDOF(), getFixer(), getBMX()]).then((values) => {
    // Build JSON Object
    const rates = {
      dof: values[0],
      fixer: values[1],
      bmx: values[2],
    }

    // Insert scrap object
    Scrap({
      dof: rates.dof,
      fixer: rates.fixer,
      bmx: rates.bmx,
    }).save((error, scrap) => {
      if (error) {
        console.error('Could not scrap successfuly', error)
        return res
          .status(500)
          .json({ error: { message: 'Could not scrap successfuly' } })
      }
      return res
        .status(200)
        .json({ success: true, message: 'Scrapped successfully', scrap })
    })
  })
})

router.route('/scrapper/data').get(isAuthenticated, async (req, res) => {
  try {
    const scrap = await Scrap.findOne({}).sort({ timestamp: -1 })
    return res.status(200).json({ success: true, scrap })
  } catch (error) {
    console.error('Could not get scrapped data', error)
    return res
      .status(500)
      .json({ error: { message: 'Could not get scrapped data' } })
  }
})

module.exports = router
