import React,{useState} from "react";
import { Link,useLocation } from "react-router-dom"; // Assuming you're using React Router for navigation
import '../../AMain/Main.css';


const Navbar = () => {
  const logged = window.localStorage.getItem("isLoggedIn");

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation(); 

  const handleLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("loggedData");
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Genify
        </Link>
      </div>

      {!isOpen && (
        <button className="navbar-toggle" onClick={handleToggle}>
          &#9776;
        </button>
      )}
      
      {isOpen && (
        <button className="navbar-toggle close-icon" onClick={handleToggle}>
          &times;
        </button>
      )}

      <div className={`navbar-right ${logged ? 'logged-in' : 'logged-out'}`}>
        <Link to="/" className={`nav-link ${location.pathname === '/' && 'active'}`}>
          Home
        </Link>
        {logged && (
        <Link to="/prompt-generator" className={`nav-link ${location.pathname === '/prompt-generator' && 'active'}`}>
          Generator
        </Link>  )}
      
        <Link to="/documentation" className={`nav-link ${location.pathname === '/documentation' && 'active'}`}>
          Documentation
        </Link> 
        
        <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' && 'active'}`}>
          About Us
        </Link>
        {logged && (
        <Link to="/feed-back" className={`nav-link ${location.pathname === '/feed-back' && 'active'}`}>
          Feedback
        </Link>  )}
        {logged && (
          <Link to="/login" className="nav-link" onClick={handleLogout}>
            Log Out
          </Link>
        )}
        {!logged && (
          <Link to="/login" className="nav-link">
            Log In
          </Link>
        )}
      </div>
    </nav>
    <div className={`navbar-mobile ${isOpen ? "open" : ""} ${logged ? 'logged-in' : 'logged-out'}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' && 'active'}`} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          {logged && (
            <Link to="/prompt-generator" className={`nav-link ${location.pathname === '/prompt-generator' && 'active'}`} onClick={() => setIsOpen(false)}>
              Generator
            </Link>
          )}
          
            <Link to="/documentation" className={`nav-link ${location.pathname === '/documentation' && 'active'}`} onClick={() => setIsOpen(false)}>
              Documentation
            </Link>
          
          
            <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' && 'active'}`} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
        
          {logged && (
            <Link to="/feed-back" className={`nav-link ${location.pathname === '/feed-back' && 'active'}`} onClick={() => setIsOpen(false)}>
              Feedback
            </Link>
          )}
          {logged && (
            <Link to="/login" className="nav-link" onClick={handleLogout}>
              Log Out
            </Link>
          )}
          {!logged && (
            <Link to="/login" className="nav-link" onClick={() => setIsOpen(false)}>
              Log In
            </Link>
          )}
        </div>
        <div className={`overlay ${isOpen ? "show" : ""}`}></div>
    
    </>
  );
};

export default Navbar;
