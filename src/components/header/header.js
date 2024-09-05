import React from "react";
import { Link } from "gatsby";
import {
  header,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./header.module.css";

const Header = () => {
  return (
    <header className={header}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/case-results" className={navLinkText}>
              Case Study
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/reviews" className={navLinkText}>
              Reviews
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact-us" className={navLinkText}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
