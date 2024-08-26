const main = document.querySelector('main');

function addCard(title, author, read) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const closeCard = document.createElement('div');
    const close = document.createElement('p');
    closeCard.id = 'close-card';
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
    
}




export { addCard }