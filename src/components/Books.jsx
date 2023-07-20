import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  console.log(books);
  return (
    <>
      <div>
        <h1>Books List</h1>
        {books.map((book) => (
          <Book
            key={book.item_id}
            itemID={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <div>
        <h1>Add New Book</h1>
        <BookForm />
      </div>
    </>
  );
};

export default Books;
