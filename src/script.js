const myLibrary = [];

const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const numberPages = document.querySelector("#numberPages");
const readStatus = document.querySelector("#readStatus")

btn.addEventListener("click", () => {
    let bookOne = {
      title: bookName.value,
      author: authorName.value,
      pages: numberPages.value,
      read: readStatus.value
    }
    myLibrary.push(bookOne);
    console.log(myLibrary)
    event.preventDefault();
}
)
    