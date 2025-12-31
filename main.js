
const months = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"];
let books = [];

(async () => {
    const response = await fetch("books.json");
    const data = await response.json();
    books = data.books;

    const d = new Date();
    document.getElementById("bookTitle").innerHTML=books[d.getMonth()].title;
    document.getElementById("bookSplash").src=books[d.getMonth()].image;
    document.getElementById("author").innerHTML=books[d.getMonth()].author + " -";
    document.getElementById("year").innerHTML=books[d.getMonth()].year;
    document.getElementById("month").innerHTML=months[d.getMonth()]  + " -";
})();