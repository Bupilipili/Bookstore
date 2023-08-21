import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem'; // Import your BookItem component
import AddBookForm from './AddBookForm'; // Import the AddBookForm component

function BooksPage() {
  const books = useSelector(state => state.books);

  return (
    <div>
      {books.map(book => (
        <div key={book.item_id}>
          <BookItem book={book} />
        </div>
      ))}

      <AddBookForm /> {/* Render the AddBookForm component */}
    </div>
  );
}

export default BooksPage;
