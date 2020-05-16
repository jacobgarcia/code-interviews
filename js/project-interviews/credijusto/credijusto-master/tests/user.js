const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const server = 'http://localhost:8080'
chai.use(chaiHttp)

describe('/GET users', () => {
  it('should GET all users', (done) => {
    chai
      .request(server)
      .get('/v1/users')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmM2M2IyNTM2NzlhYTFkOGU4ZmY5MTgiLCJlbWFpbCI6Im1hcmlvQG51cmUubXgiLCJpYXQiOjE1Mzk4MDEyMjh9.V_hruvpmHgqwKtE3tuhWiNBlRHzF89dL1MObRZptuec'
      )
      .end((error, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('object')
        expect(res.body).to.have.property('users')
        expect(res.body.users).to.be.a('array')
        done()
      })
  })
})
