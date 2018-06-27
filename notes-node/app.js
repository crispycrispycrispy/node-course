console.log('Starting app');

const fs = require('fs');
const os = require('os');
var user = os.userInfo();

const _ = require('lodash');
//console.log(_.isString('Gavin'));
var Array = _.uniq(['A','B','A']);
console.log(Array);

// const notes = require('./notes.js');
// var res = notes.addition(23, 33);
// console.log(res);