function Book(title, author, year, isRead, isDisplayed) {
    this.title = title
    this.author = author
    this.year = year
    this.isRead = isRead
    this.isDisplayed = this.isDisplayed
}


let library = []
const form = document.querySelector(".newBookForm")
const cardHolder = document.querySelector(".cardHolder")

form.addEventListener('submit', addBookToLibrary)


function addBookToLibrary(event){

    let bookName = document.getElementById("name").value
    let bookAuthor = document.getElementById("author").value
    let bookYear = document.getElementById("year").value
    let isReadCheckboxes = document.querySelectorAll('input[type="checkbox"]')
    let isReadValue = null
    let isDisplayed = false
    
    for(let i = 0; i < Array.from(isReadCheckboxes).length; i++){
        if (Array.from(isReadCheckboxes)[i].checked) {
            isReadValue = Array.from(isReadCheckboxes)[i].value
            break
        }
    }

    event.preventDefault()
    
    newBook = new Book(bookName, bookAuthor, bookYear, isReadValue, isDisplayed)
    library.push(newBook)

    console.log(library)

    displayBooks(library)
}

function displayBooks(library){

    for(let i = 0; i < library.length; i++){
        
        if(library[i].isDisplayed === true){
            continue
        }

        library[i].isDisplayed = true
        const newCard = document.createElement("div")
        const content = `
        <div class="card">
        <div class="cardTop">
            <div class="bookmark"></div>
            <button id="closeBtn">X</button>
        </div>
        <div class="bookInfo">
            <p class="title">Crime and Punisment</p>
            <p class="author">Fedor Dostoyevsky</p>
            <p class="year">1866</p>
        </div>
        <p class="markAsRead">Mark as Read</p>
        <input type="checkbox" class="isReadCheckBox">
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
        cardToDelete.remove()
        console.log(cardToDelete)

    })
    })
})

document.addEventListener("DOMNodeInserted", function(){
    document.querySelectorAll(".isReadCheckBox").forEach((checkbox) => {checkbox.addEventListener('change', function(){
        console.log("clicked")
    })}
    )
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


    





