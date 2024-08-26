import { addCard, library, NewUser } from "./add.js";

const newBtn = document.querySelector('#new');
const addBtn = document.querySelector('#add');
const cancelBtn = document.querySelector('#cancel');
const formSection = document.querySelector('section');
const bookName = document.querySelector('#book-name');
const authorName = document.querySelector('#author');
const radio = document.querySelector('#radio');
const formError = document.querySelector('#form-error');

let haveYouReadIt = null;

//samples
const user1 = new NewUser(1, 'Atomic Habits', 'James Clear', true);
const user2 = new NewUser(2, 'Better Than Before', 'Gretchen Rubin', false);
const user3 = new NewUser(3,"Harry Potter and the Sorcerer's Stone", 'J.K. Rowling', true);


library.push(user1);
library.push(user2);
library.push(user3);
let userIdCounter = library.length;





function cleanWord (para) {
    const clean = para.split(' ').filter((item) => item !== '').join(' ');
    return clean;
}

function resetNew() {

    haveYouReadIt ? otherDiv('left') : otherDiv('right');

    bookName.value = '';
    authorName.value = '';
    haveYouReadIt = null;
    formError.style.visibility = 'hidden';

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


addBtn.addEventListener('click', () => {
    const testText = /\w+/;

    if (testText.test(bookName.value) && testText.test(authorName.value) && haveYouReadIt !== null) {
        userIdCounter++;
        const newBook = new NewUser(userIdCounter, cleanWord(bookName.value), cleanWord(authorName.value), haveYouReadIt);
        library.push(newBook);
        resetNew();
        formSection.style.visibility = 'hidden';

    } else {
        formError.style.visibility = 'visible';
    }

})

cancelBtn.addEventListener('click', () => {
    resetNew();
    formSection.style.visibility = 'hidden';
})











