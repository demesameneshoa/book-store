import { Link } from 'react-router-dom';

const Navbar = () => (
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
);

export default Navbar;
