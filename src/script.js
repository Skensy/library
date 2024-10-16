const myLibrary = [];

const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const numberPages = document.querySelector("#numberPages");
const readStatus = document.querySelector("#readStatus")
const booksList = document.querySelector("#booksList")

btn.addEventListener("click", () => {
    let bookOne = {
      title: bookName.value,
      author: authorName.value,
      pages: numberPages.value,
      read: readStatus.value
    }

    event.preventDefault();

    myLibrary.push(bookOne);

    let divOne = document.createElement("div");
    let titleDivOne = document.createElement("h1");
    let authorDivOne = document.createElement("h2");
    let pagesDivOne = document.createElement("h3");
    let readDivOne = document.createElement("p");

    divOne.classList.add("flex", "flex", "flex-col", "w-80", "h-56", "bg-slate-200", "p-4", "rounded");
    
    titleDivOne.textContent = bookOne.title;
    titleDivOne.classList.add("text-xl", "mb-2")
    
    authorDivOne.textContent = bookOne.author;
    
    pagesDivOne.textContent = bookOne.pages;
    readDivOne.textContent = bookOne.read;
    
    divOne.appendChild(titleDivOne);
    divOne.appendChild(authorDivOne);
    divOne.appendChild(pagesDivOne);
    divOne.appendChild(readDivOne);
    booksList.appendChild(divOne);


    bookName.value = "";
    authorName.value = "";
    numberPages.value = "";
    readStatus.value = "";


    event.preventDefault();

}
)
    