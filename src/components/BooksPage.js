import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksAsync } from '../redux/books/booksSlice'; // Adjust import path as needed
import BookItem from './BookItem'; // Import the BookItem component
import AddBookForm from './AddBookForm'; 

function BooksPage() {
  const dispatch = useDispatch();
  const app_id = 'ktMaPkuUjcdRtsd1h31t'; // actual app_id
  const books = useSelector(state => state.books.books);
  const status = useSelector(state => state.books.status);

  useEffect(() => {
    dispatch(fetchBooksAsync(app_id)); // Fetch books from API using the actual app_id
  }, []);

  return (
    <div>
     <p>{ status }</p>
      {
        books.map((book, index) => (
          <div key={index}>
            <BookItem book={book} />
          </div>
        ))
      }
      <AddBookForm />
    </div>
  );
  
}

export default BooksPage;
