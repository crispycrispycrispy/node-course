console.log('Starting app');

const fs = require('fs');
const os = require('os');
var user = os.userInfo();

const notes = require('./notes.js');
var res = notes.addition(23, 33);

console.log(res);