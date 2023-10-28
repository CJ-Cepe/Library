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

form.addEventListener('submit', (e) => {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    console.log(`${title}, ${author}, ${read}, ${pages}`);
    createBook(title, author, read, pages);

    e.preventDefault();
    form.reset();
    modal.close();
});

function createBook(titleValue, authorValue, readValue, pagesValue) {
    let book = document.createElement('div');
    book.classList.add('book');
    let divider1 = document.createElement('div');
    divider1.classList.add('divider');
    /*     let divider2 = document.createElement('div').classList.add('divider');
    let divider3 = document.createElement('div').classList.add('divider'); */
    let title = document.createElement('span');
    title.classList.add('title');
    let author = document.createElement('span');
    author.classList.add('author');
    let status = document.createElement('div');
    status.classList.add('status');
    let bookShadow = document.createElement('div');
    bookShadow.classList.add('book-shadow');

    book.appendChild(title).appendChild(divider1);
    innerShelf.appendChild(book);
}

/* 
       <div class="book">
                        <div class="divider"></div>
                        <span class="title">Lord of the Rings</span>
                        <div class="divider"></div>
                        <span class="author">
                            John Ronald Reuel Tolkien
                            <p class="pages">123 p.</p>
                        </span>
                        <div class="divider"></div>
                        <div class="status"></div>
                        <div class="book-shadow"></div>
                    </div>
*/
