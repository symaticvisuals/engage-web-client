import React, { useState } from "react";
import "./Navbar.css";
import brand from "../../images/engage.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="">
      {!isTabletOrMobile ? (
        <div className="navbar__main">
          <div className="navbar">
            <div className="navbar__brandLogo">
              <Link
                onClick={() => closeMenu()}
                to="home"
                smooth={true}
                duration={500}
              >
                <img src={brand} alt="" />
              </Link>
            </div>
            <div className="navbar__userLinks">
              <Link
                onClick={() => closeMenu()}
                to="about"
                spy={true}
                smooth={true}
              >
                <h3>About Us</h3>
              </Link>
              <Link
                onClick={() => closeMenu()}
                to="tracks"
                spy={true}
                smooth={true}
              >
                <h3>Tracks</h3>
              </Link>
              <Link
                onClick={() => closeMenu()}
                to="sponsors"
                spy={true}
                smooth={true}
              >
                <h3>Sponsors</h3>
              </Link>
              <Link
                onClick={() => closeMenu()}
                to="contact"
                spy={true}
                smooth={true}
              >
                <h3>FAQs</h3>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <nav className="hamburger">
          <div className="hamburger-header">
            <div className="navbar__brandLogo">
              <Link
                onClick={() => closeMenu()}
                to="home"
                smooth={true}
                duration={500}
              >
                <img src={brand} alt="" />
              </Link>
            </div>
            <button onClick={handleToggle}>
              {navbarOpen ? (
                <i className="fas fa-times fa-2x"></i>
              ) : (
                <i className="fas fa-bars fa-2x"></i>
              )}
            </button>
          </div>

          <div className={`hamburger-nav ${navbarOpen ? "show-nav" : ""}`}>
            <div className="navbar__brandLogo">
              <Link
                onClick={() => closeMenu()}
                to="home"
                smooth={true}
                duration={500}
              >
                <img src={brand} alt="" />
              </Link>
            </div>
            <div className="hamburger-navlinks">
              <Link
                onClick={() => closeMenu()}
                to="about"
                spy={true}
                smooth={true}
              >
                <h3>About Us</h3>
              </Link>
              <Link
                onClick={() => closeMenu()}
                to="tracks"
                spy={true}
                smooth={true}
              >
                <h3>Tracks</h3>
              </Link>
              <Link
                onClick={() => closeMenu()}
                to="sponsors"
                spy={true}
                smooth={true}
              >
                <h3>Sponsors</h3>
              </Link>
              <Link
                onClick={() => closeMenu()}
                to="contact"
                spy={true}
                smooth={true}
              >
                <h3>FAQs</h3>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
