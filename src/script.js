const myLibrary = [];

const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const numberPages = document.querySelector("#numberPages");
const readStatus = document.querySelector("#readStatus")
const booksList = document.querySelector("#booksList")


btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form from submitting

    let bookOne = {
      title: bookName.value,
      author: authorName.value,
      pages: numberPages.value,
      read: readStatus.value
    }

    if (bookOne.title === "" || bookOne.author === "" || bookOne.pages === "" || bookOne.read === "") {
      alert("Per favore riempi i campi");
      return
    }

    if (bookOne.read === "on") {
      bookOne.read = "yes"
    }

    myLibrary.push(bookOne);

    let divOne = document.createElement("div");
    let titleDivOne = document.createElement("h1");
    let authorDivOne = document.createElement("h2");
    let pagesDivOne = document.createElement("h3");
    let readDivOne = document.createElement("p");

    divOne.classList.add("flex", "flex", "flex-col", "w-80", "h-56", "bg-slate-200", "p-4", "rounded");
    
    titleDivOne.textContent = "Title: " + bookOne.title;
    titleDivOne.classList.add("text-xl", "mb-2")
    
    authorDivOne.textContent = "Author: " + bookOne.author;
    
    pagesDivOne.textContent = "Pages: " + bookOne.pages;
    readDivOne.textContent = "Have I read this book?: " + bookOne.read;
    
    divOne.appendChild(titleDivOne);
    divOne.appendChild(authorDivOne);
    divOne.appendChild(pagesDivOne);
    divOne.appendChild(readDivOne);
    booksList.appendChild(divOne);


    bookName.value = "";
    authorName.value = "";
    numberPages.value = "";
    readStatus.value = "";


    return
}
)
    