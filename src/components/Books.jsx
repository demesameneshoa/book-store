import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  console.log(isLoading);
  if (isLoading) {
    return (
      <h2>Loading...</h2>
    );
  }
  return (
    <>
      <div>
        <h1>Books List</h1>
        {Object.values(books)
          .flat()
          .map((book, index) => {
            if (book && book.title && book.author && book.category) {
              return (
                <Book
                  key={Object.keys(books)[index]}
                  itemID={Object.keys(books)[index]}
                  author={book.author}
                  title={book.title}
                  category={book.category}
                />
              );
            }
            return <h3 key={Object.keys(books)[index]}>No Books Available</h3>;
          })}
      </div>
      <div>
        <h1>Add New Book</h1>
        <BookForm />
      </div>
    </>
  );
};

export default Books;
