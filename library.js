function Book(title, author, year, isRead) {
    this.title = title
    this.author = author
    this.year = year
    this.isRead = isRead
}

books = []

let form = document.querySelector(".newBookForm")






form.addEventListener('submit', function(event) {
    let bookName = document.getElementById("name").value
    let bookAuthor = document.getElementById("author").value
    let bookYear = document.getElementById("year").value
    let isReadCheckboxes = document.querySelectorAll('input[type="checkbox"]')
    let isReadValue = null
    
    for(let i = 0; i < Array.from(isReadCheckboxes).length; i++){
        if (Array.from(isReadCheckboxes)[i].checked) {
            isReadValue = Array.from(isReadCheckboxes)[i].value
            break
        }
    }
    event.preventDefault()
    newBook = new Book(bookName, bookAuthor, bookYear, isReadValue)
    books.push(newBook)
   
    console.log(newBook)
})

console.log(books)
