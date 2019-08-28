module.exports = {
  apps: [
    // Server application
    {
      name: 'credijusto',
      script: 'server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
    // Scrapper application
    {
      name: 'scrapper',
      script: 'scrapper.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
      cron_restart: '*/1 * * * *', // Update every minute... Minute, Hour, Day, Month, Week
    },
  ],
}
