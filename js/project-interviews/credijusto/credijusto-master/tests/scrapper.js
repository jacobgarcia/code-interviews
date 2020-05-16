const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const server = 'http://localhost:8080'
chai.use(chaiHttp)

describe('/SCRAPPER', () => {
  it('should GET the latest scrapped data /DATA', (done) => {
    chai
      .request(server)
      .get('/v1/scrapper/data')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmM2M2IyNTM2NzlhYTFkOGU4ZmY5MTgiLCJlbWFpbCI6Im1hcmlvQG51cmUubXgiLCJpYXQiOjE1Mzk4MDEyMjh9.V_hruvpmHgqwKtE3tuhWiNBlRHzF89dL1MObRZptuec'
      )
      .end((error, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('object')
        expect(res.body.scrap).to.be.a('object')
        done()
      })
  })

  it('should scrap data /SCRAP', (done) => {
    chai
      .request(server)
      .post('/v1/scrapper/scrap')
      .end((error, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('object')
        expect(res.body).to.have.property('scrap')
        expect(res.body.scrap).to.have.property('dof')
        expect(res.body.scrap).to.have.property('fixer')
        expect(res.body.scrap).to.have.property('bmx')
        done()
      })
  })
})
