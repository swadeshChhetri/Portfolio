import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaWhatsapp } from "react-icons/fa";

const HeaderSection = ({ toggleTheme, isDaylight }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIsShaking((prevState) => !prevState); // Toggle shaking every interval
    }, 1800); // 1000ms (1 second) interval
    setIntervalId(id);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(id);
  }, []);

  const handleContactClick = () => {
    setIsShaking(false);
    document.getElementById("contact").scrollIntoView();
    clearInterval(intervalId);
  };

  return (
    <navbar className="navBar">
      <div className="logo-container">
        <img src="img/port.jpg" alt="logo" className="logo" />
      </div>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem nav-link"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-59}
          duration={500}
          className="desktopMenuListItem nav-link"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="expertises"
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}
          className="desktopMenuListItem nav-link"
        >
          Expertise
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem nav-link"
        >
          Projects
        </Link>

        <a
          href="https://wa.me/+918597079194" // Replace with your phone number
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuListItem nav-link whatsapp-link d-flex me-6"
        >
          <FaWhatsapp size={20} style={{ marginRight: "5px" }} />
          WhatsApp
        </a>

        <button className="daynight" onClick={toggleTheme}>
          {isDaylight ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>

      <div>
        <button
          style={{ marginTop: "0.4rem" }}
          className={`desktopMenuBtn ${isShaking ? "shake" : ""}`}
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>

      {/* Mobile menu toggler */}
      <span>
        <i
          className="bi bi-list mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </span>

      {/* Mobile menu */}
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="expertises"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Expertise
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </navbar>
  );
};

export default HeaderSection;
