module.exports = {
    apps: [{
      name: 'MCSP-IngredientsHero',
      script: './server/index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-13-59-22-172.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/IH-BO.pem',
        ref: 'origin/master',
        repo: 'git@github.com:ingredient-hero/MCSP-IngredientsHero.git',
        path: '/home/ubuntu/MCSP-IngredientsHero',
        'post-deploy': 'npm run setup && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }