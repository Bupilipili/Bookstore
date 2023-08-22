import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addBook, removeBook } from '../redux/books/booksSlice'; // Import the actions
import BookItem from './BookItem';
import AddBookForm from './AddBookForm'; 

function BooksPage() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks()); // Fetch books on component mount
  }, [dispatch]);

  const handleAddBook = () => {
    const newBook = {
      // ... create a new book object ...
    };
    dispatch(addBook(newBook)); // Dispatch the addBook action
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId)); // Dispatch the removeBook action
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookItem key={book.item_id} book={book} onDeleteBook={() => handleRemoveBook(book.item_id)} />
        ))}
      </ul>
      <AddBookForm/ >
      {/* ... your add book form ... */}
    </div>
  );
}

export default BooksPage;
