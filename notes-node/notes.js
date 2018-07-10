const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,body
    };
    try{
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e){
    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes == 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }
    else{
        console.log("Error");
    }
}

var getAll = () => {
    console.log('Listing');
}

var readNote = (title) => {
    console.log('Reading');
}

var removeNote = (title) => {
    console.log('Removing');
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}