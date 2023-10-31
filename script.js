const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

/*================== Element Selectors =================*/
let addButton = document.querySelector('.add');
let innerShelf = document.querySelector('.inner-shelf');
let focusBook = null;

let dialog1 = document.querySelector('.form-1'); //first dialog
let cancelButton1 = dialog1.querySelector("button[type='reset']");
let form1 = dialog1.querySelector('form');

let dialog2 = document.querySelector('.form-2');
let saveButton1 = dialog2.querySelector('.save');
let deleteButton1 = dialog2.querySelector('.delete');
let cancelButton2 = dialog2.querySelector("button[type='button']");

/*================== Listeners =================*/
addButton.addEventListener('click', (e) => {
    dialog1.showModal();
});

cancelButton1.addEventListener('click', (e) => {
    dialog1.close();
});

form1.addEventListener('submit', (e) => {
    let title = form1.querySelector('#title').value;
    let author = form1.querySelector('#author').value;
    let pages = form1.querySelector('#pages').value;
    let read = form1.querySelector('#read').value;

    addBookToLibrary(new Book(title, author, pages, read));
    displayBook(title, author, pages, read);

    e.preventDefault();
    form1.reset();
    dialog1.close();
});

function displayBook(titleValue, authorValue, pagesValue, readValue) {
    //create elements
    let book = document.createElement('div'),
        divider1 = document.createElement('div'),
        divider2 = document.createElement('div'),
        divider3 = document.createElement('div'),
        title = document.createElement('span'),
        author = document.createElement('span'),
        pages = document.createElement('p'),
        status = document.createElement('div'),
        bookShadow = document.createElement('div');

    //add class names
    book.classList.add('book');
    divider1.classList.add('divider');
    divider2.classList.add('divider');
    divider3.classList.add('divider');
    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    bookShadow.classList.add('book-shadow');
    status.classList.add('status');
    updateStatus(readValue, status);

    //set attribute & Listener
    book.setAttribute('data-index', myLibrary.length - 1);
    book.addEventListener('click', form2Show);

    //change textContent
    title.textContent = titleValue;
    author.textContent = authorValue;
    pages.textContent = pagesValue + ' p.';

    //append elems - assemble book
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

function form2Show(e) {
    let title = dialog2.querySelector('#title-2'),
        author = dialog2.querySelector('#author-2'),
        pages = dialog2.querySelector('#pages-2'),
        read = dialog2.querySelector('#read-2');

    focusBook = e.currentTarget;
    let index = focusBook.dataset.index;

    title.value = myLibrary[index].title;
    author.value = myLibrary[index].author;
    pages.value = myLibrary[index].pages;
    read.value = myLibrary[index].read;

    dialog2.showModal();
}

deleteButton1.addEventListener('click', (e) => {
    let index = focusBook.dataset.index;

    //remove book from myLibrary array
    myLibrary.splice(index, 1);

    //remove displayed book
    innerShelf.removeChild(focusBook);

    //update index of other books
    let books = innerShelf.querySelectorAll('.book');
    books.forEach((book) => {
        if (+book.dataset.index > index) {
            book.dataset.index = +book.dataset.index - 1;
        }
    });

    //close modal after delete
    dialog2.close();
});

saveButton1.addEventListener('click', (e) => {
    let index = focusBook.dataset.index,
        bookPages = document.createElement('p');

    //get form 2 new values
    let title = dialog2.querySelector('#title-2').value,
        author = dialog2.querySelector('#author-2').value,
        pages = dialog2.querySelector('#pages-2').value,
        read = dialog2.querySelector('#read-2').value;

    e.preventDefault();

    //get book elem
    let displayedTitle = focusBook.querySelector('.title');
    let displayedAuthor = focusBook.querySelector('.author');
    let displayedStatus = focusBook.querySelector('.status');

    //change text content
    displayedTitle.textContent = title;
    displayedAuthor.textContent = author;
    displayedAuthor.appendChild(bookPages);
    bookPages.classList.add('pages');
    bookPages.textContent = pages + ' p.';

    myLibrary[index].title = title;
    myLibrary[index].author = author;
    myLibrary[index].pages = pages;
    myLibrary[index].read = read;

    updateStatus(read, displayedStatus);

    //close modal after save
    dialog2.close();
});

function updateStatus(readValue, status) {
    if (readValue == 1) {
        status.classList.add('done');
    } else {
        status.classList.remove('done');
    }
}

cancelButton2.addEventListener('click', (e) => {
    dialog2.close();
});

/* 

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
    - read status
    - read toogle class

    - limit field number of chars
    - form 2 save
    - form 2 delete
    - form 2 cancel
    - clean code
     */
