module.exports = {
  apps: [
    {
      name: 'pacerline-website',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/pacerline-website',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_file: '/var/log/pm2/pacerline-website.log',
      out_file: '/var/log/pm2/pacerline-website-out.log',
      error_file: '/var/log/pm2/pacerline-website-error.log',
      time: true,
      watch: false,
      max_memory_restart: '1G',
      node_args: '--max-old-space-size=1024',
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};