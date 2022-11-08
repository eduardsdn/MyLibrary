function Book(title, author, year, isRead) {
    this.title = title
    this.author = author
    this.year = year
    this.isRead = isRead
}

let library = []
let form = document.querySelector(".newBookForm")
form.addEventListener('submit', addBookToLibrary)


function addBookToLibrary(event){

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
    library.push(newBook)

    console.log(library)
}


cardHolder = document.querySelector(".cardHolder")


function displayBooks(library) {

    for (let i = 0; i < library.length; i++){

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










// ------------------ Handling buttons ------------------
const cardCloseButtonS = document.querySelectorAll("#closeBtn")

document.addEventListener("DOMNodeInserted", function(){
    document.querySelectorAll("#closeBtn").forEach((cardCloseButton) => {cardCloseButton.addEventListener('click', function(event){
        parent1 = this.parentElement
        cardToDelete = parent1.parentElement
        console.log(cardToDelete)

    })
    })
})

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





