const cron = require('node-cron');

// Runs every day at 9:50 
cron.schedule('0 50 9 * * *', () => {
  console.log('Good morning! Task runs at 9 AM daily.');
});
