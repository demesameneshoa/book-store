import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    <h4>
      Title:
      {book.title}
    </h4>
    <h4>
      Author:
      {book.author}
    </h4>
    <button type="button"> REMOVE </button>
  </div>
);

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};
export default Book;
