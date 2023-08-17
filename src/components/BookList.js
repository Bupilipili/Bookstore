import React from 'react';
import BookItem from './BookItem';

function BookList({ books, onDeleteBook }) {
  return (
    <div>
      <h3>Books</h3>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} onDeleteBook={onDeleteBook} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
