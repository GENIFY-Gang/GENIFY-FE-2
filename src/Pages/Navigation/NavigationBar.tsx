import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './NavigationBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">Genify</Link>
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/prompt-generator" className="nav-link">Generator</Link>
                <Link to="/documentation" className="nav-link">Documentation</Link>
                <Link to="/about-us" className="nav-link">About Us</Link>
                <Link to="/feed-back" className="nav-link">Feedback</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
