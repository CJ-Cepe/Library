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
    console.log('watermelon');
    e.preventDefault();
    modal.close();
    form.reset();

    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let read = document.querySelector('#read');
    let pages = document.querySelector('#pages');
    console.log();
});
