const myLibrary = [];

let modal = document.querySelector('.modal');
let addButton = document.querySelector('.add');
let cancelButton = document.querySelector("button[type='reset']");
let form = document.querySelector('form');
let innerShelf = document.querySelector('.inner-shelf');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(titleValue, authorValue, pagesValue, readValue) {
    let book = document.createElement('div');
    book.classList.add('book');
    book.setAttribute('data-index', myLibrary.length);
    let divider1 = document.createElement('div');
    divider1.classList.add('divider');
    let divider2 = document.createElement('div');
    divider2.classList.add('divider');
    let divider3 = document.createElement('div');
    divider3.classList.add('divider');
    let title = document.createElement('span');
    title.classList.add('title');
    let author = document.createElement('span');
    author.classList.add('author');
    let pages = document.createElement('p');
    pages.classList.add('pages');
    let status = document.createElement('div');
    status.classList.add('status');
    let bookShadow = document.createElement('div');
    bookShadow.classList.add('book-shadow');

    title.textContent = titleValue;
    author.textContent = authorValue;
    pages.textContent = pagesValue + ' p.';

    book.appendChild(divider1);
    book.appendChild(title);
    book.appendChild(divider2);
    author.appendChild(pages);
    book.appendChild(author);
    book.appendChild(divider3);
    book.appendChild(status);
    book.appendChild(bookShadow);
    innerShelf.insertBefore(book, addButton);
}

addButton.addEventListener('click', (e) => {
    modal.showModal();
});

cancelButton.addEventListener('click', (e) => {
    modal.close();
});

form.addEventListener('submit', (e) => {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    addBookToLibrary(new Book(title, author, pages, read));
    displayBook(title, author, pages, read);

    e.preventDefault();
    form.reset();
    modal.close();
});

/* function adjustFontSize(id) {
    var element = document.querySelector('title');
    var parent = element.parentNode;
    var fontSize = parseInt(window.getComputedStyle(element).fontSize);

    while (
        element.offsetHeight > parent.offsetHeight ||
        element.offsetWidth > parent.offsetWidth
    ) {
        fontSize--;
        element.style.fontSize = fontSize + 'px';
    }
} */
/* 
//set data-index

per book add
    - set data index for the book element - HTML
        - the data-index will be the myLibrary length since start in index 0
        - the data-index corresponds to the array index
    - create book
    - push it in myLibrary
    - add/display book in html, the last book

edit book
    - once book is clicked
    - open a form and filled the fields with object contents based on the corresponding object in the array with data-index
    - once the user click save - replace the old value with the new value

delete book
    - once the button click delete
    - get assigned data-index
    - delete object from the array
    - edit html whose attribute is data-index = the desired + 

add field limit for title, author, pages

    done

     */
