import '../../AMain/Main.css';
import { Link, useLocation } from "react-router-dom"; // Importing useLocation hook

const Navbar = () => {
  const logged = window.localStorage.getItem("isLoggedIn");
  const location = useLocation(); // Getting the current location
  const handleLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("loggedData");
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Genify
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className={`nav-link ${location.pathname === '/' && 'active'}`}>
          Home
        </Link>
        {logged && (
          <Link to="/prompt-generator" className={`nav-link ${location.pathname === '/prompt-generator' && 'active'}`}>
            Generator
          </Link>
        )}
          <Link to="/documentation" className={`nav-link ${location.pathname === '/documentation' && 'active'}`}>
            Documentation
          </Link>
          <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' && 'active'}`}>
            About Us
          </Link>
        {logged && (
          <Link to="/feed-back" className={`nav-link ${location.pathname === '/feed-back' && 'active'}`}>
            Feedback
          </Link>
        )}
        {logged ? (
          <Link to="/login" className="nav-link" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/login" className={`nav-link ${location.pathname === '/login' && 'active'}`}>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
