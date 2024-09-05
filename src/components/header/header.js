import React from "react";
import { Link } from "gatsby";
import {
  header,
  logo,
  navLinks,
  navLinkItem,
  navLinkText,
  menuIcon,
  mobileNav,
} from "./header.module.css";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={header}>
      <div className={logo}>
        <Link to="/">
        <StaticImage src="../../images/arishilogo.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className={`${navLinks} ${mobileMenuOpen ? mobileNav : ""}`}>
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
        <div className={menuIcon} onClick={toggleMobileMenu}>
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  );
};

export default Header;
