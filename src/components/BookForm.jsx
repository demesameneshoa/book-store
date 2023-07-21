import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/styles.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input id="title-input" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input id="author-input" type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button id="add-button" type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
