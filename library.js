document.getElementById("addBookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("addTitle").value;
    const author = document.getElementById("addAuthor").value;
    const publicationYear = document.getElementById("addPublicationYear").value;
    const coverImagePath = document.getElementById("addCoverImagePath").value;
    const ebookLink = document.getElementById("addEbookLink").value;

    const data = {
        title: title,
        author: author,
        publication_year: publicationYear,
        cover_image_url: coverImagePath,
        ebook_link: ebookLink
    };

    fetch('http://localhost:8000/ebooks/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("addBookResponse").innerText = JSON.stringify(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

document.getElementById("removeBookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("removeTitle").value;

    fetch(`http://localhost:8000/ebooks/${title}/delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            document.getElementById("removeBookResponse").innerText = data.detail;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

function getLibrary() {
    fetch('http://localhost:8000/ebooks/')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const libraryDiv = document.getElementById("library");
            libraryDiv.innerHTML = "";  // Clear out the current library display

            if (data.length === 0) {
                libraryDiv.innerHTML = "<p>Ebook Library is empty.</p>";
            } else {
                data.forEach(book => {
                    const bookDiv = document.createElement("div");
                    bookDiv.innerHTML = `
                    <div class="p-4 bg-white rounded shadow-lg">
                        <h3 class="text-lg font-semibold mb-2">${book.title}</h3>
                        <p class="text-gray-600">Author: <span class="font-medium">${book.author}</span></p>
                        <p class="text-gray-600">Year: <span class="font-medium">${book.publication_year}</span></p>
                        <div class="mt-4">
                            <img class="w-full h-64 object-cover rounded" src="${book.cover_image_url}" alt="${book.title} cover image">
                        </div>
                        <a target='_blank' class="mt-4 inline-block rounded-lg px-3 py-2 bg-blue-500 font-bold text-white" href="${book.ebook_link}">Read Now</a>
                    </div>
                    `;
                    libraryDiv.appendChild(bookDiv);
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
