import { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
    };
    onAdd(newBook);
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;