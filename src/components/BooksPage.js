import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksAsync } from '../redux/books/booksSlice'; // Adjust import path as needed
import LoadingSpinner from './LoadingSpinner';
import BookItem from './BookItem'; // Import the BookItem component
import AddBookForm from './AddBookForm';
import './BooksPage.css';

function BooksPage() {
  const dispatch = useDispatch();
  const app_id = 'ktMaPkuUjcdRtsd1h31t'; // actual app_id
  const books = useSelector(state => state.books.books);
  const isLoading = useSelector(state => state.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooksAsync(app_id)); // Fetch books from API using the actual app_id
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner-container">
          <LoadingSpinner /> {/* Display the centered loading spinner */}
        </div>
      ) : (
        <div>
          {books.map((book, index) => (
            <div key={index}>
              <BookItem book={book} />
            </div>
          ))}
          <AddBookForm />
        </div>
      )}
    </div>
  );
}

export default BooksPage;
