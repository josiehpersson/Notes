const newNote = document.getElementById('new-note');
const submitBtn = document.getElementById('new-note-submit-btn');
const notesList = document.getElementById('notes-list');
const note = document.getElementsByClassName('note');
const clearBtn = document.getElementById('clear-notes-btn');

//SKAPA ETT LISTITEM
let createNote = (note) => {
    let listItem = document.createElement('li');
    let deleteBtn = document.createElement('button');
    let noteLabel = document.createElement('label');
    listItem.className='note';
    listItem.id ='note';
    deleteBtn.innerText='X';
    deleteBtn.className='delete-note-btn';
    noteLabel.innerText = note; 
    listItem.appendChild(noteLabel);
    listItem.appendChild(deleteBtn);
    return listItem;
}
//FUNKAR

//SPARA NOTES I LOCALSTORAGE
let saveNote = () => {
    let notes = notesList.innerHTML;
    localStorage.setItem('list', notes)
}
//FUNKAR

//LÄGG TILL LISTITEM I UL
let addNote = () => {
    let listItem = createNote(newNote.value);
    notesList.appendChild(listItem);
    saveNote();
    newNote.value="";
}
//FUNKAR

let removeNote = (e) => {
console.log('inne i remove')
let listItem = e.target;
listItem.parentNode.removeChild(listItem);
localStorage.removeItem('list',deleted);
}


//LADDA LISTA NÄR MAN ÖPPNAR WEBBLÄSAREN
window.onload = () => {
    let savedNotes = localStorage.getItem('list');
    notesList.innerHTML += savedNotes;
}
//FUNKAR

let deleteNote = () => {
console.log('inne i deletenote');
}
//SKAPA NOTE NÄR MAN TRYCKER PÅ KNAPPEN
submitBtn.onclick=()=> {
    addNote();
}
//FUNKARa

const listOfNotes = document.querySelector('notes-list');
//ONCLICK FÖR DELETEBTN
notesList.onclick = (e) => {
    if(e.target.className === 'delete-note-btn') {
        console.log('delete-btn-clicked');
        deleteNote();
    } else return;
}
//FUNKAR

