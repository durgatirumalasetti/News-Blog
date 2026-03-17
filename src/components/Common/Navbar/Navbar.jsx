import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/home";

  return (
    <>
      <nav className="main-navbar">
        {/* Hamburger */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* ✅ MOBILE BACK BUTTON */}
        {isHomePage && (
          <button
            className="Back-button mobile-back"
            onClick={() => navigate("/")}
          >
            ⬅ Back
          </button>
        )}

        {/* Desktop Nav */}
        <ul className="nav-links">
          {isHomePage && (
            <li>
              <button className="Back-button" onClick={() => navigate("/")}>
                ⬅ Back
              </button>
            </li>
          )}
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/health">Health</Link></li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link>
        <Link to="/sports" onClick={() => setMenuOpen(false)}>Sports</Link>
        <Link to="/technology" onClick={() => setMenuOpen(false)}>Technology</Link>
        <Link to="/health" onClick={() => setMenuOpen(false)}>Health</Link>
      </div>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
