const fs = require('fs');

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,body
    };
    var duplicateNotes = isDuplicate(notes, title);
    if(duplicateNotes == 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    console.log('Listing');
}

var readNote = (title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var fetchNotes = () => {
    try{
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
        return notes;
    } catch(e){
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var isDuplicate = (notes, title) => {
    var duplicateNotes = notes.filter((note) => note.title === title);
    return duplicateNotes;
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}