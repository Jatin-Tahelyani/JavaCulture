import React from 'react'

export default function navbar() {
  return (
     <div className="nav-container">
        <div className="nav-line left"></div>
        <div className="custom-navbar">
            <div className="navbar-logo">JavaCulture</div>
            <div className="navbar-links">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Our Cafe</a>
                <a href="#" className="nav-link">About Us</a>
                <a href="#" className="nav-link">Trending</a>
            </div>
            <img src="images/user_logo.png" alt="User" className="user-img" />
        </div>
        <div className="nav-line right"></div>
    </div>
  )
}
