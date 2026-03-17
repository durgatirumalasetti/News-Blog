import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT - About */}
        <div className="footer-about">
          <h3 className="footer-logo">FNews</h3>
          <p>
            FNews brings you the latest breaking news, world updates,
            technology, sports, and health stories — fast & reliable.
          </p>
        </div>

        {/* MIDDLE - Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Movies">Movies</Link></li>
            <li><Link to="/Technology">Technology</Link></li>
            <li><Link to="/Sports">Sports</Link></li>
            <li><Link to="/Health">Health</Link></li>
          </ul>
        </div>

        {/* RIGHT - Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FNews. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
