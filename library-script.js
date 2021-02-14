let myLibrary = [];

const container = document.querySelector('#container');
const addBookButton = document.querySelector('#addBookButton');
const submitAddBook = document.querySelector('#submitAddBook');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `"${title} by ${author}, ${pages} pages, ${read}"`
    }
}

function addToLibrary (obj) {
    myLibrary.push(obj);
}

let firstBook = new Book("Catch-22", "Joseph Heller", 453, "Y");
addToLibrary(firstBook);

let secondBook = new Book("Slaughterhouse Five", "Kurt Vonnegut", 312, "N");
addToLibrary(secondBook);

let thirdBook = new Book("Can't Hurt Me: Master Your Mind and Defy the Odds", "David Goggins", 321, "Y");
addToLibrary(thirdBook);

function displayBooks () {
    for (let i = 0; i < myLibrary.length; i++) {
        const newLine = document.createElement('div');
        newLine.classList.add('infoLine');
            const titleBox = document.createElement('div');
            titleBox.classList.add('innerInfoBoxLarge');
            titleBox.innerHTML = myLibrary[i].title;
            newLine.appendChild(titleBox);

            const authorBox = document.createElement('div');
            authorBox.classList.add('innerInfoBoxLarge');
            authorBox.innerHTML = myLibrary[i].author;
            newLine.appendChild(authorBox);

            const pagesBox = document.createElement('div');
            pagesBox.classList.add('innerInfoBoxSmall');
            pagesBox.innerHTML = myLibrary[i].pages;
            newLine.appendChild(pagesBox);

            const readBox = document.createElement('div');
            readBox.classList.add('innerInfoBoxSmall');
            readBox.innerHTML = myLibrary[i].read;
            newLine.appendChild(readBox);

        container.appendChild(newLine);
    }
}

function clearBooks () {
    container.innerHTML = '';
}

addBookButton.addEventListener('click', openAddBook);

submitAddBook.addEventListener('click', () => {
    let titleVar = document.querySelector("#book-name").value;
    let authorVar = document.querySelector("#author").value;
    let pagesVar = document.querySelector("#pages").value;
    let readVar = document.querySelector("#read-yet").value;
    const newBook = new Book(titleVar, authorVar, (parseInt(pagesVar)), readVar);
    addToLibrary(newBook);
    clearBooks();
    displayBooks();
    closeAddBook();
});

function openAddBook () {
    document.getElementById("addBook").style.display = "block";
}

function closeAddBook () {
    document.getElementById("addBook").style.display = "none";
}

displayBooks();

