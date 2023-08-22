import React from 'react';

function BookItem({ book, onDeleteBook }) {
  const handleRemoveClick = () => {
    onDeleteBook(book.item_id);
  };

  return (
    <li>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <button onClick={handleRemoveClick}>Remove Book</button>
    </li>
  );
}

export default BookItem;
