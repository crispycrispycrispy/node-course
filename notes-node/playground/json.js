// var obj = {
//     name : "Gavin"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof(obj),obj);
// console.log(typeof(stringObj),stringObj);

// var personString = '{"name":"Gavin","age":22}';
// var person = JSON.parse(personString);
// console.log(typeof(person),person);

const fs = require('fs');
var originalNote = {
    title : 'Some Title',
    body : 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof(note));
console.log(note);