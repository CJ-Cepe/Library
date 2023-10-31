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

let dialog1 = document.querySelector('.form-1'); //first dialog
let cancelButton1 = dialog1.querySelector("button[type='reset']");
let form1 = dialog1.querySelector('form');

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
    if (readValue == 1) {
        status.classList.add('done');
    } else {
        status.classList.remove('done');
    }

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
    let dialog2 = document.querySelector('.form-2'),
        title = dialog2.querySelector('#title-2'),
        author = dialog2.querySelector('#author-2'),
        pages = dialog2.querySelector('#pages-2'),
        read = dialog2.querySelector('#read-2');

    dialog2.showModal();

    let temp = e.currentTarget;
    let index = temp.dataset.index;
    focusIndex = temp;

    title.value = myLibrary[index].title;
    author.value = myLibrary[index].author;
    pages.value = myLibrary[index].pages;
    read.value = myLibrary[index].read;
}

let deleteButton = document.querySelector('.delete');
let focusIndex = 0;
let saveButton = document.querySelector('.save');

deleteButton.addEventListener('click', (e) => {
    myLibrary.splice(focusIndex.dataset.index, 1);
    tempIndex = focusIndex.dataset.index;
    innerShelf.removeChild(focusIndex);
    console.log(myLibrary);
    //change index of other books
    let books = document.querySelectorAll('.book');

    books.forEach((book) => {
        console.log(book, books);
        if (+book.dataset.index > tempIndex) {
            book.dataset.index = +book.dataset.index - 1;
        }
    });

    //modal-close
});

saveButton.addEventListener('click', (e) => {
    let title = document.querySelector('#title-2');
    let author = document.querySelector('#author-2');
    let pages = document.querySelector('#pages-2');
    let read = document.querySelector('#read-2');
    e.preventDefault();
    console.log(title);
    console.log(focusIndex);
    let index = focusIndex.dataset.index;
    let bookTitle = focusIndex.querySelector(`.title`);
    let bookAuthor = focusIndex.querySelector(`.author`);
    let status = focusIndex.querySelector('.status');
    console.log(pages.value + ' p.');
    bookTitle.textContent = title.value;
    bookAuthor.textContent = author.value;
    let bookPages = document.createElement('p');
    bookPages.classList.add('pages');
    bookAuthor.appendChild(bookPages);
    bookPages.textContent = pages.value + ' p.';

    myLibrary[index].title = title.value;
    myLibrary[index].author = author.value;
    myLibrary[index].pages = pages.value;
    myLibrary[index].read = read.value;

    if (read.value == 1) {
        status.classList.add('done');
    } else {
        status.classList.remove('done');
    }
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
