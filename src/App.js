import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './styles/styles.css';

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
