const request = require('request')

request.post('http://localhost:8080/v1/scrapper/scrap', (error, response) => {
  if (response.statusCode === 200) console.log('Scrapped successfully')
})
