import React from 'react';
import { RiArrowDownSLine, RiFunctionLine } from 'react-icons/ri';

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src="img/logo_.png" alt="logo" />
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="active__link nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#specs" className="nav__link">Specs</a>
            </li>
            <li className="nav__item">
              <a href="#case" className="nav__link">Case</a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">Products</a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <RiArrowDownSLine />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <RiFunctionLine />
        </div>
      </nav>
    </header>
  );
};

export default Header;
