import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="https://nickgarcia.me" className="navbar-item">
        Home
      </a>
      &nbsp;|&nbsp;
      <a href="https://nickgarcia.me/about" className="navbar-item">
        About
      </a>
      &nbsp;|&nbsp;
      <a href="https://nickgarcia.me/faq" className="navbar-item">
        FAQ
      </a>
      &nbsp;|&nbsp;
      <a href="https://nickgarcia.me/contact" className="navbar-item">
        Contact
      </a>
    </nav>
  );
}

export default NavBar;
