const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = `"${title}"`;
    this.author = author;
    this.pages = pages;
    this.status = status;
}



function addBookToLib(newBook) {
    myLibrary.push(newBook);
}


const books = document.querySelector('.books');
const addBtn = document.querySelector('.addB button');
const modal = document.querySelector('dialog');
const submitBtn = document.querySelector('button[type="submit"]');
const title = document.querySelector('input[placeholder="Title"]');
const author = document.querySelector('input[placeholder="Author"]');
const pages = document.querySelector('input[placeholder="Pages"]');
const checkBox = document.querySelector('input[type="checkbox"]');



function createCards() {
    const book = document.createElement('div');
    book.classList.add('book')
    const title = document.createElement('p');
    title.textContent = myLibrary[myLibrary.length - 1].title;
    const author = document.createElement('p');
    author.textContent = myLibrary[myLibrary.length - 1].author;
    const pages = document.createElement('p');
    pages.textContent = myLibrary[myLibrary.length - 1].pages;
    const status = document.createElement('button');
    status.classList.add('status');
    if (myLibrary[myLibrary.length - 1].status) {
        status.textContent = "Read";
        status.style.background = 'rgb(145, 250, 145)';
    } else {
        status.textContent = "Not Read";
        status.style.background = 'rgba(253, 28, 28, 0.445)';
    }
    status.onclick = () => {
        myLibrary[myLibrary.length - 1].status = !myLibrary[myLibrary.length - 1].status;
         if (myLibrary[myLibrary.length - 1].status) {
        status.textContent = "Read";
        status.style.background = 'rgb(145, 250, 145)';
    } else {
        status.textContent = "Not Read";
        status.style.background = 'rgba(253, 28, 28, 0.445)';
    }
    }
    const remove = document.createElement('button');
    remove.dataset.index = myLibrary.length-1;
    remove.onclick = () => {
        myLibrary.splice(remove.dataset.index,1);
        books.removeChild(book);
    }
    remove.classList.add('remove');
    remove.textContent = 'remove';
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(status);
    book.appendChild(remove);
    books.appendChild(book);
}

let titleVal;
let authorVal;
let pagesVal;
let checkBoxVal;
function submitBook(e) {

    titleVal = title.value;
    authorVal = author.value;
    pagesVal = pages.value;
    checkBoxVal = checkBox.checked;

    modal.close();
    e.preventDefault();
    addBookToLib(new Book(titleVal, authorVal, pagesVal, checkBoxVal));
    console.log(myLibrary);
    createCards();
}

addBtn.onclick = () => modal.showModal();

submitBtn.onclick = submitBook;



const stats = document.querySelectorAll('.status');




