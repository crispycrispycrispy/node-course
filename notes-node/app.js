console.log('Starting app');

const fs = require('fs');
const os = require('os');
var user = os.userInfo();

//fs.appendFileSync('Greetings.txt', 'Hello '+user.username);

fs.appendFileSync('Greetings.txt', `Hello ${user.username}`);


