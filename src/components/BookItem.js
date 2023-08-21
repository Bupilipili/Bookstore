import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
    </div>
  );
};

export default BookItem;
