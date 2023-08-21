import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice'; // Adjust the import path

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <li>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p> {/* Include the category */}
      <button onClick={handleRemoveBook}>Remove Book</button>
    </li>
  );
}

export default BookItem;
