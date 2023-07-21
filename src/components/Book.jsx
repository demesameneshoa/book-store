import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  title, author, category, itemID,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>
        Title:
        {title}
      </h4>
      <h4>
        Author:
        {author}
      </h4>
      <h4>
        Category:
        {category}
      </h4>
      <button type="button" onClick={() => dispatch(removeBook(itemID))}>REMOVE </button>
    </div>
  );
};

Book.propTypes = {
  itemID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
