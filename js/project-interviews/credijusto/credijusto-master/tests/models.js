const path = require('path')
const expect = require('chai').expect
const mongoose = require('mongoose')

const Scrap = require(path.resolve('models/Scrap'))
const User = require(path.resolve('models/User'))

const { testDatabase } = require(path.resolve('config')) // Configuration variables

describe('database', () => {
  before((done) => {
    mongoose.connect(
      testDatabase,
      { useNewUrlParser: true, useCreateIndex: true }
    )
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    db.once('open', () => {
      done()
    })
  })

  describe('scrap', () => {
    it('should be invalid if dof is empty', (done) => {
      const scrap = new Scrap()
      scrap.validate((error) => {
        expect(error.errors.dof).to.exist
        done()
      })
    })

    it('should be invalid if fixer is empty', (done) => {
      const scrap = new Scrap()
      scrap.validate((error) => {
        expect(error.errors.fixer).to.exist
        done()
      })
    })

    it('should be invalid if bmx is empty', (done) => {
      const scrap = new Scrap()
      scrap.validate((error) => {
        expect(error.errors.bmx).to.exist
        done()
      })
    })

    it('should save correct data', (done) => {
      Scrap({
        dof: {
          value: 18.92,
          lastUpdated: Date.now(),
        },
        fixer: {
          value: 19.92,
          lastUpdated: Date.now(),
        },
        bmx: {
          value: 17.92,
          lastUpdated: Date.now(),
        },
      }).save(done())
    })

    it('should not save incorrect data', (done) => {
      Scrap({
        dof: {
          value: 18.92,
          lastUpdated: Date.now,
        },
        fixer: {
          value: 19.92,
          lastUpdated: Date.now,
        },
      }).save((error) => {
        if (error) return done()
        throw new Error('Should generate error')
      })
    })

    it('should retreive data', (done) => {
      setTimeout(() => {
        Scrap.findOne({}, (error, scrap) => {
          if (error) {
            throw error
          }
          if (!scrap) {
            throw new Error('No data!')
          }
          done()
        })
      }, 30)
    })
  })

  describe('user', () => {
    it('should be invalid if email is empty', (done) => {
      const user = new User()
      user.validate((error) => {
        expect(error.errors.email).to.exist
        done()
      })
    })

    it('should be invalid if username is empty', (done) => {
      const user = new User()
      user.validate((error) => {
        expect(error.errors.username).to.exist
        done()
      })
    })

    it('should be invalid if password is empty', (done) => {
      const user = new User()
      user.validate((error) => {
        expect(error.errors.password).to.exist
        done()
      })
    })

    it('should save correct data', (done) => {
      User({
        email: 'mario@nure.mx',
        username: 'mariogarcia',
        password: 'securepassword',
        name: 'Mario',
        surname: 'Garcia',
        company: 'Nure',
      }).save(done())
    })

    it('should not save incorrect data', (done) => {
      User({
        name: 123,
        surname: 456,
        company: 789,
      }).save((error) => {
        if (error) return done()
        throw new Error('Should generate error')
      })
    })

    it('should retreive data', (done) => {
      setTimeout(() => {
        User.findOne({}, (error, user) => {
          if (error) {
            throw error
          }
          if (!user) {
            throw new Error('No data!')
          }
          done()
        })
      }, 10)
    })
  })

  // After all tests are finished drop database and close connection
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done)
    })
  })
})
