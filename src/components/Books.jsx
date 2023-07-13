import PropTypes from 'prop-types';
import Book from './Book';
import BookForm from './BookForm';

const Books = ({ books, onAdd, onRemove }) => (
  <>
    <div>
      <h1>Books List</h1>
      {books.map((book) => (
        <Book key={book.id} book={book} onRemove={onRemove} />
      ))}
    </div>
    <div>
      <h1>Add New Book</h1>
      <BookForm onAdd={onAdd} />
    </div>
  </>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Books;
