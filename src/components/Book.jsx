import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../styles/styles.css';

const Book = ({
  title, author, itemID, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-wrapper">
      <div className="book-detail">
        <p className="book-category">
          {category}
        </p>
        <p className="book-title">
          {title}
        </p>
        <p className="book-author">
          {author}
        </p>
        <div className="book-buttons">
          <span className="books-btn">Comments</span>
          <button type="button" className="books-btn" onClick={() => dispatch(removeBook(itemID))}>Remove</button>
          <span className="books-btn">Edit</span>
        </div>

      </div>
      <div className="percentage">
        <div className="circle" />
        <div>
          <span className="percent-num">
            64%
          </span>
          <span className="complete"> Completed</span>
        </div>
      </div>
      <div className="chap-container">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-num">Chapter 17</p>
        <button type="button" id="update-progress">UPDATE PROGRESS</button>
      </div>
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
