import { addCard } from "./add.js";

const newBtn = document.querySelector('#new');
const resetBtn = document.querySelector('#reset');
const addBtn = document.querySelector('#add');
const cancelBtn = document.querySelector('#cancel');
const formSection = document.querySelector('section');
const radio = document.querySelector('#radio');


let library = [];
let user = library.length;

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


newBtn.addEventListener('click', () => {
    formSection.style.visibility = 'visible';
})

cancelBtn.addEventListener('click', () => {
    formSection.style.visibility = 'hidden';
})


function radioDivEvent(e) {
    console.log(e.target.className);
    
}

radio.addEventListener('click', e => radioDivEvent(e))