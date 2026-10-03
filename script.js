//your JS code here. If required.
const form = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const bookList = document.getElementById("book-list");
form.addEventListener("submit", function(event) {
    // Stop page from refreshing
    event.preventDefault();
    // Get values from input boxes
    const titleValue = title.value;
    const authorValue = author.value;
    const isbnValue = isbn.value;

    // Create a new table row
    const row = document.createElement("tr");
    // Add data to the row
    row.innerHTML = `
        <td>${titleValue}</td>
        <td>${authorValue}</td>
        <td>${isbnValue}</td>
        <td>
            <button class="delete">X</button>
        </td>
    `;
    // Add row to table body
    bookList.appendChild(row);
    // Clear input fields
    title.value = "";
    author.value = "";
    isbn.value = "";
});
// Delete book
bookList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        // Get the row containing the button
        const row = event.target.parentElement.parentElement;
        // Remove the row
        row.remove();
    }

});