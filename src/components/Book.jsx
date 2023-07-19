import PropTypes from 'prop-types';

const Book = ({ title, author, category }) => (
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
    <button type="button"> REMOVE </button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
