module.exports = {
  project: {
    name: 'Credijusto',
    shortName: 'Credijusto',
    themeColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  secret: 'sVp3.r5-eCREt{p4Ss}',
  databaseUri:
    process.env.MONGODB_URL || 'mongodb://localhost:27017/credijusto',
  testDatabase: 'mongodb://localhost:27017/credijusto-test',
}
