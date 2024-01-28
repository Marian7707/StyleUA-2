// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-top">
          <a href="/">
            <img src="./img/logo.png" alt="Style UA Logo" className="logo" />
          </a>
          <h1 className="title">National clothes of UKRAINE</h1>
        </div>
        <div className="user-controls">
          <div id="registration-modal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <form id="registration-form">
                <h2>Sing in</h2>
                <input
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  required
                />
                <input type="email" placeholder="Email" name="email" required />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                <button className="register" type="submit">Sing in</button>
              </form>
            </div>
          </div>

          <button className="account-btn" aria-label="Account">
            <img className="account" src="./img/user-solid.svg" alt="" />
          </button>
          <button className="cart-btn" aria-label="Cart">
            <img src="./img/cart-shopping-solid.svg" alt="" />
          </button>
          <button className="hamburger-btn" id="hamburger">
            <img src="./img/bars-solid.svg" alt="" />
          </button>
          <div className="sidebar" id="sidebar">
            <ul>
              <li><a href="#men">MEN</a></li>
              <li><a href="#women">WOMEN</a></li>
              <li><a href="#accessories">ACCESSORIES</a></li>
              <li><a href="#accessories">DELIVERY</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="search-container">
        <input type="search" placeholder="Search" aria-label="Search" />
        <button className="search-btn" aria-label="Search">
          <img src="./img/search.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
