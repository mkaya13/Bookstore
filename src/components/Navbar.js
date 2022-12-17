import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navBar">
      <div className="inside-navbar">
        <span>
          <h2 className="logo">Bookstore CMS</h2>
        </span>
        <ul className="navbar-ul">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="active-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <img className="user-image" src="images/user-image.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
