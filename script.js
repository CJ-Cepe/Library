let modal = document.querySelector('.modal');
let addButton = document.querySelector('.add');
let cancelButton = document.querySelector("button[type='reset']");
let form = document.querySelector('form');
let innerShelf = document.querySelector('.inner-shelf');

addButton.addEventListener('click', (e) => {
    modal.showModal();
});

cancelButton.addEventListener('click', (e) => {
    modal.close();
});

function addBook(authorValue, titleValue, pagesValue, readValue) {
    let outerBook = document.createElement('div');
    let divider1 = document.createElement('div');
    let divider2 = document.createElement('div');
    let divider3 = document.createElement('div');
    let title = document.createElement('span');
    let author = document.createElement('span');
    let pages = document.createElement('p');
    let status = document.createElement('div');
    let shadow = document.createElement('div');

    title.textContent = titleValue;
    author.textContent = authorValue;
    pages.textContent = pagesValue;
    outerBook.appendChild(title);
    outerBook.appendChild(author);
    outerBook.appendChild(pages);
    outerBook.classList.add('book');
    innerShelf.appendChild(outerBook);
}

form.addEventListener('submit', (e) => {
    console.log('yummy');
    //e.preventDefault();
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    console.log(author, title, pages, read);
    //addBook(author, title, pages, read);
});
