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


    appendNewCard(books)
    
    console.log(newBook)
    console.log(books)
})




// ----------- HANDLING POP UP FORM -----------
addBookBtn = document.querySelector("#addBookBtn")
popUp = document.querySelector(".popUpHidden")

addBookBtn.addEventListener('click', function(){ 
    popUp.classList.remove("popUpHidden")
    popUp.classList.add("popUpDisplayed")
})

popUpClose = document.querySelector("#closeBtnPopUp")

popUpClose.addEventListener('click', function(){
    popUp.classList.remove("popUpDisplayed")
    popUp.classList.add("popUpHidden")
})
// ----------- HANDLING POP UP FORM -----------


// --------- Creating new card elements from books array ---------

cardHolder = document.querySelector(".cardHolder")


function appendNewCard(books) {
    for (let i = 0; i < books.length; i++){

        const newCard = document.createElement("div")

        const content = `
        <div class="card">
            <div class="cardTop">
                <div class="bookmark"></div>
                <button id="closeBtn">X</button>
            </div>
            <div class="bookInfo">
                <p class="title">${books[i].title}</p>
                <p class="author">${books[i].author}</p>
                <p class="year">${books[i].year}</p>
            </div>
            <p class="markAsRead">Mark as Read</p>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
        </div>`

        newCard.innerHTML = content

        cardHolder.appendChild(newCard)
    }
}
