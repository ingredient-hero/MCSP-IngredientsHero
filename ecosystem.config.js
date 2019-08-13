module.exports = {
    apps: [{
      name: 'IH',
      script: './server/index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-13-59-22-172.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/IH-BO.pem',
        ref: 'origin/master',
        repo: 'https://github.com/ingredient-hero/MCSP-IngredientsHero',
        path: '/home/ubuntu/server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }