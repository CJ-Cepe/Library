let modal = document.querySelector('.modal');
let addButton = document.querySelector('.add');
let cancelButton = document.querySelector("button[type='reset']");
let form = document.querySelector('form');

addButton.addEventListener('click', (e) => {
    modal.showModal();
});

cancelButton.addEventListener('click', (e) => {
    modal.close();
});

form.addEventListener('submit', (e) => {
    console.log('yummy');
    //e.preventDefault();
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    alert(`${author} ${title} ${pages} ${read}`);
});
