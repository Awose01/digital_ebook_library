# Digital Ebook Library

A simple digital ebook library project built using Django and Django REST framework for the backend, and JavaScript, HTML, and CSS for the frontend.

## Dependencies

- Python 3.11 or later: [Download here](https://www.python.org/downloads/)
- Django and other necessary packages: Installed using `pipenv`

## Installation and Setup

1.Clone the repository:

```bash
git clone https://github.com/Awose01/digital_ebook_library.git
```

2.Create and activate a virtual environment with pipenv:

```bash
pip install pipenv  
pipenv install --dev  
```

3.Activate the Pipenv shell:

```bash
pipenv shell
```

4.Apply migrations:

```bash
python manage.py migrate
```

5.Run the server:

```bash
python manage.py runserver
```

You can access the application at `http://localhost:8000`.

## Usage

To interact with the ebook library, visit `http://localhost:8000`. Here you can add, view, and delete books.

## APIs

- Get all books: `GET /ebooks/`
- Add a new book: `POST /ebooks/create/`
- Remove a book by its title: `DELETE /ebooks/<title>/delete/`
