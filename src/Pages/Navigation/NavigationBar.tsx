import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import '../../AMain/Main.css';

const Navbar = () => {
  const logged = window.localStorage.getItem("isLoggedIn");
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
        <Link to="/" className="nav-link">
          Home
        </Link>
        {logged && (
        <Link to="/prompt-generator" className="nav-link">
          Generator
        </Link>  )}
        {logged && (
        <Link to="/documentation" className="nav-link">
          Documentation
        </Link>  )}
        {logged && (
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>  )}
        {logged && (
        <Link to="/feed-back" className="nav-link">
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
  );
};

export default Navbar;
