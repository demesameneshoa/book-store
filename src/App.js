// import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './App.css';
// import { fetchBooks } from './redux/books/booksSlice';

function App() {
  // const isLoading = useSelector((state) => state.books.isLoading);
  // if (isLoading) {
  //   return (
  //     <h2>Loading...</h2>
  //   );
  // }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
