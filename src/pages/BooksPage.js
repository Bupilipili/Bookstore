import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import Navigation from '../components/Navigation';

function BooksPage() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <Navigation />
      {' '}
      {/* Display navigation links */}
      <BookList books={books} onDeleteBook={handleDeleteBook} />
      {' '}
      {/* Display book list */}
      <BookForm onAddBook={handleAddBook} />
      {' '}
      {/* Display book form */}
    </div>
  );
}

export default BooksPage;
