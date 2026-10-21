import { useState, useEffect } from 'react';
import BookForm from '../components/BookForm';
import { Pencil, Trash2 } from "lucide-react";

function ManageBooks() {
const[books, setBooks] = useState([]);
const[editingBook, setEditingBook] = useState(null);

function loadBooks() {
    fetch('http://localhost:8080/books')
    .then((response) => response.json())
    .then((data) => setBooks(data));
}

function deleteBook(id) {
    fetch(`http://localhost:8080/books/${id}`, {
        method: 'DELETE',
    })
    .then(() => {
        loadBooks();
    });
}

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <main>
            <h1> Manage Books </h1>
            <p className="page-description">
                Add new books or update your existing catalog.
            </p>

            <section className="panel">
            <h2>{editingBook ? 'Edit Book' : 'Add Book'}</h2>
            <BookForm book={editingBook} onSaved={loadBooks} onCancelEdit={() => setEditingBook(null)} />
            </section>

            <section className="panel">
            
            <h2>Current Books</h2>

            <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td>
                                <button className="button button-primary" onClick={() => setEditingBook(book)}><Pencil size={18} /> Edit</button>
                                <button className="button button-danger" onClick={() => deleteBook(book.id)}><Trash2 size={18} /> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
               </div>
            </section>
        </main>
    );
}

export default ManageBooks;