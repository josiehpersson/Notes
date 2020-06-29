const newNote = document.getElementById('new-note');
const submitBtn = document.getElementById('new-note-submit-btn');
const notesList = document.getElementById('notes-list');
const note = document.getElementsByClassName('note');
const clearBtn = document.getElementById('clear-notes-btn');

let createNewDate = () => {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  month = month + 1;
  let year = currentDate.getFullYear();
  let dateString = `${pad(date)}/${pad(month)}/${year}`;
  return dateString;
};

let pad = (number) => {
  return number < 10 ? '0' + number : number;
};

let createTimeStamp = () => {
  let currentDate = new Date();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let timeString = `${pad(hour)}:${pad(minute)}`;
  return timeString;
};

let createNote = (note) => {
  let listItem = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let noteLabel = document.createElement('label');
  let timeStamp = document.createElement('p');
  let date = createNewDate();
  let time = createTimeStamp();
  timeStamp.innerHTML = `${date} ${time}`;
  timeStamp.className = 'time-stamp';
  listItem.className = 'note';
  listItem.id = 'note';
  deleteBtn.innerText = 'X';
  deleteBtn.className = 'delete-note-btn';
  noteLabel.innerText = note;
  listItem.appendChild(timeStamp);
  listItem.appendChild(noteLabel);
  listItem.appendChild(deleteBtn);
  return listItem;
};

let saveNote = () => {
  let notes = notesList.innerHTML;
  localStorage.setItem('list', notes);
};

let addNote = () => {
  let listItem = createNote(newNote.value);
  notesList.appendChild(listItem);
  saveNote();
  newNote.value = '';
};

window.onload = () => {
  let savedNotes = localStorage.getItem('list');
  if(savedNotes !== undefined || null || '') {
    notesList.innerHTML += savedNotes;
  } else return;
};

submitBtn.onclick = () => {
  addNote();
};

notesList.onclick = (e) => {
  if (e.target.className === 'delete-note-btn') {
    let removeThis = e.target.parentNode;
    deleteNote(removeThis);
  } else return;
};

let deleteNote = (removenote) => {
  notesList.removeChild(removenote);
  localStorage.removeItem(removenote);
  saveNote();
};
