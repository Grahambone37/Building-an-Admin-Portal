
// Your Code Here
function books() {
    let bookList = document.querySelector('#book-list');
    let titles = [];
    fetch('http://localhost:3001/listBooks')
        .then(response => response.json())
        .then(
                function(book) {
                    console.log(book)
                    let arrayToLi = book.forEach(element => {
                        let li = document.createElement('li')
                        let textInput = document.createElement('input')
                        textInput.setAttribute('type', 'number')
                        textInput.setAttribute('id', element.id)
                        textInput.value = element.quantity

                        let label = document.createElement('label')
                        label.setAttribute('for', element.id)
                        label.innerHTML = `_Inventory:_`

                        let button = document.createElement('button')
                        button.setAttribute('id', element.title)
                        button.innerText = 'Save'
                        button.addEventListener('click', function() {
                            let bookStock = textInput.value
                            fetch('http://localhost:3001/updateBook', {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    'id': element.id,
                                    'quantity': bookStock
                                })
                            })
                        })

                        li.append(element.title)
                        li.append(label)
                        li.append(textInput)
                        li.append(button)
                        bookList.append(li)
                    });
                    arrayToLi
                }
        )
}
books()