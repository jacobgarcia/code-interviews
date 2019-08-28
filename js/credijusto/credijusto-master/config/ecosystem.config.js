module.exports = {
  apps: [
    // Server application
    {
      name: 'credijusto',
      script: './server.js',
      watch: ['server', 'config', 'server.js', 'router'],
      ignore_watch: ['src', 'node_modules', 'dist/**'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    // Scrapper application
    {
      name: 'scrapper',
      script: './scrapper.js',
      watch: ['scrapper', 'config', 'scrapper.js', 'router'],
      ignore_watch: ['src', 'node_modules', 'dist/**'],
      cron_restart: '*/1 * * * *', // Update every minute... Minute, Hour, Day, Month, Week
    },
  ],
}
