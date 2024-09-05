import React from "react";
import { Link } from "gatsby";
import "./footer.scss";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="branding">
          <div className="footer-image">
            <StaticImage src="../../images/arishilogo.png" alt="Logo" />
          </div>{" "}
          <p>© 2024 YourLawFirm. All rights reserved.</p>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/case-results">Case Study</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="socialMedia">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#" aria-label="Facebook">
                FB
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                TW
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                LI
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                IG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
