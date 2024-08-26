const main = document.querySelector('main');
const resetBtn = document.querySelector('#reset');

let library = [];



function addCard(bookId, title, author, read) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `book${bookId}`
    
    const closeCard = document.createElement('div');
    const close = document.createElement('p');
    closeCard.className = 'close-card';
    close.textContent = 'x';
    

    const secondDiv = document.createElement('div');
    const titleAndAuthor = document.createElement('div');
    const readOrNot = document.createElement('div');
    

    const titleText = document.createElement('h4');
    const authorText = document.createElement('p');
    titleText.textContent = title;
    authorText.textContent = author;


    const haveRead = document.createElement('p');
    const changeButton = document.createElement('button');
    haveRead.id = 'have-read';
    haveRead.textContent = read ? 'Already Read' : 'Not Yet Read';
    changeButton.textContent = 'Change';


    titleAndAuthor.append(titleText, authorText);
    readOrNot.append(haveRead, changeButton)

    
    closeCard.appendChild(close);
    secondDiv.append(titleAndAuthor, readOrNot);
    card.append(closeCard, secondDiv);
    main.appendChild(card);
    

    closeCard.addEventListener('click', () => {
        const bookIdNum = Number(card.id.slice(4));
        card.style.display= 'none';
        library = library.filter(book => book.bookId !== bookIdNum);
        card.remove();
    })

    changeButton.addEventListener('click', () => {
        const bookIdNum = Number(card.id.slice(4));
        library.map((book) => {
            if (book.bookId === bookIdNum) {
                book.changeRead();
                read = book.read;
            } 
        })
        haveRead.textContent = read ? 'Already Read' : 'Not Yet Read';
    })
}

function NewUser(bookId, book, author, read){
    this.bookId = bookId;
    this.book = book;
    this.author = author;
    this.read = read;

    this.changeRead = function() {
        this.read = !this.read;
    }

    addCard(this.bookId, this.book, this.author, this.read);

}




export { addCard, library, NewUser }