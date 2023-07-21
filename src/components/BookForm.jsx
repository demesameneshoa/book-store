import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

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
      category: 'N/A',
    };
    dispatch(addBook(newBook));
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

export default BookForm;
