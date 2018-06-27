console.log('Starting app');

const fs = require('fs');

fs.appendFileSync('Greetings.txt', 'Hello World!!');