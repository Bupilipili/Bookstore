import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 function
import BookItem from './BookItem'; // Import your BookItem component
import { addBook, removeBook } from '../redux/books/booksSlice'; // Import your actions

function BooksPage() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: uuidv4(), // Use uuidv4 to generate a unique ID
      title: 'New Book Title',
      author: 'New Book Author',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <BookItem book={book} />
          <button onClick={() => handleRemoveBook(book.item_id)}>Remove Book</button>
        </div>
      ))}

      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default BooksPage;
