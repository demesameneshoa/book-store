import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div>
      <span className="Bookstore-CMS Text-Style-3">
        Bookstore CMS
      </span>
    </div>
    <div className="menuitems">
      <Link to="/" style={{ textDecoration: 'none' }}><span className="BOOKS Text-Style-6">BOOKS</span></Link>
      <Link to="/categories" style={{ textDecoration: 'none' }}><span className="CATEGORIES Text-Style-6">CATEGORIES</span></Link>
    </div>
    <div className="navbar-icon">
      <img src="https://i.imgur.com/AM0HQkJ.png" alt="user-icon" />
    </div>
  </nav>
);

export default Navbar;
