console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
//console.log('Process:', process.argv);
console.log('Yargs:', argv);

if(command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note) console.log('Note created\n', `Title: ${note.title}`, `Body: ${note.body}`);
    else console.log('Duplicates found');
}else if(command == 'list'){
    notes.getAll();
}else if(command == 'read'){
    var resp_note = notes.readNote(argv.title);
    console.log(resp_note);
    var msg = (_.isEmpty(resp_note)) ? 'Note does not exist' : `Title: ${resp_note.title} Body: ${resp_note.body}`;
    console.log(msg);
}else if(command == 'remove'){
    var is_removed = notes.removeNote(argv.title);
    var msg = is_removed ? 'Note removed' : 'Note does not exist';
    console.log(msg);
}else{
    console.log('Operation not found');
}
