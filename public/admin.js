
// Your Code Here
function books(){
    let bookList = document.querySelector('#book-list');
    let titles = [];
    fetch('http://localhost:3001/listBooks')
        .then((response) => response.json())
        .then(book => titles = book.map(obj => obj.title))
        .then(newArr => console.log(newArr))
}
books()