import { addCard } from "./add.js";

const newBtn = document.querySelector('#new');
const resetBtn = document.querySelector('#reset');
const addBtn = document.querySelector('#add');
const cancelBtn = document.querySelector('#cancel');
const formSection = document.querySelector('section');
const bookName = document.querySelector('#book-name');
const authorName = document.querySelector('#author');
const radio = document.querySelector('#radio');


let library = [];
let userIdCounter = library.length;
let haveYouReadIt = null;

function NewUser(bookId, book, author, read){
    this.bookId = bookId;
    this.book = book;
    this.author = author;
    this.read = read;

    this.changeRead = function() {
        this.read = !this.read;
    }
}


const user1 = new NewUser(1, 'a', 'b', true);
const user2 = new NewUser(2, 'asdf', 'aaa', true);
const user3 = new NewUser(3,'zxdd', 'qwe', true);

library.push(user1);
library.push(user2);
library.push(user3);

console.log(library);
console.log(library[1].book)

addCard('the quick brown', 'david x', true);
addCard('Hello World', 'Nice one', false);




function resetNew() {

    haveYouReadIt ? otherDiv('left') : otherDiv('right');

    bookName.value = '';
    authorName.value = '';
    haveYouReadIt = null;

}


function chosenColor(targetDiv) {
    const leftOrRight = document.querySelector(`.${targetDiv}`);
    leftOrRight.style.backgroundColor = 'var(--dark-color)';
    leftOrRight.style.color = 'var(--light-color)';
}

function otherDiv(targetDiv) {
    const leftOrRight = document.querySelector(`.${targetDiv}`);
    leftOrRight.style.backgroundColor = 'var(--light-color)';
    leftOrRight.style.color = 'var(--dark-color)';
}

function radioDivEvent(e) {
    const targetDiv = e.target.className.split(' ')[1];
    if (targetDiv === 'left') {
        chosenColor('left');
        otherDiv('right');
        return true;
    }
    else if (targetDiv === 'right') {
        chosenColor('right');
        otherDiv('left');
        return false;
    }

}



newBtn.addEventListener('click', () => {
    formSection.style.visibility = 'visible';

    radio.addEventListener('click', e => {
        haveYouReadIt = radioDivEvent(e);
    })
})

cancelBtn.addEventListener('click', () => {
    resetNew();
    formSection.style.visibility = 'hidden';
})


addBtn.addEventListener('click', () => {
    console.log(`
    Book Name: ${bookName.value}, 
    Author: ${authorName.value}, 
    Have You Read It?: ${haveYouReadIt}`);

    resetNew();
    console.log('again')
    formSection.style.visibility = 'hidden';
})






