import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const handleAddBook = (newbook) => {
    setBooks((books) => [...books, newbook]);
  };

  const handleRemovebook = (bookid) => {
    setBooks((books) => books.filter((book) => book.id !== bookid));
  };
  return (
    <>
      <nav>
        <div>
          <h1> Book Store</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Books onAdd={handleAddBook} onRemove={handleRemovebook} books={books} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
