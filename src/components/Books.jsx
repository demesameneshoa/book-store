import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import BookForm from './BookForm';
import '../styles/styles.css';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  if (isLoading) {
    return (
      <h2>Loading...</h2>
    );
  }
  return (
    <>
      <div>
        {Object.values(books)
          .flat()
          .map((book, index) => {
            if (book && book.title && book.author && book.category) {
              return (
                <div key={Object.keys(books)[index]} className="book-card">
                  <Book
                    key={Object.keys(books)[index]}
                    itemID={Object.keys(books)[index]}
                    author={book.author}
                    title={book.title}
                    category={book.category}
                  />
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className="Line" />
      <div className="new-book-wrapper">
        <span className="addBookHeader">
          ADD NEW BOOK
        </span>
        <BookForm />
      </div>
    </>
  );
};

export default Books;
