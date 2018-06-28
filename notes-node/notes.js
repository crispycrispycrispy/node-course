var addNote = (title, body) => {
    console.log('Adding note', title, body);
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