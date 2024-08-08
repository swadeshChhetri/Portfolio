import React, { useEffect, useRef } from "react";
import "./home.css";
import Typed from "typed.js";
import { Link } from "react-scroll";

const HomeSection = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Web Designer", "Front-End Developer", "React Developer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section class="home" id="home">
      <div class="home-content">
        <img src="img/pro.jpg" alt="profile image" class="home-img" />
        <h3>Hi,Myself</h3>

        <h1>Swadesh Chhetri</h1>

        <div class="image-container">
          <h3 /*ref={typedRef}*/>
            And I'm a <span class="multiple-text"></span>
          </h3>
        </div>
        <div class="social-media">
          <Link to="https://www.facebook.com/swadesh.chhetri.1">
            <i class="bi bi-facebook"></i>
          </Link>
          <Link to="#">
            <i class="bi bi-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com/swadesh.85/">
            <i class="bi bi-instagram"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/swadesh85/">
            <i class="bi bi-linkedin color"></i>
          </Link>
        </div>
        <a href="https://drive.google.com/file/d/11dAFiXIuR0AEzoX-OPR0iCheEguN5cY4/view?usp=sharing" download class="btnn">
          <i class="bi bi-arrow-down-circle"></i> Dowload CV
        </a>
        <Link to="contact" class="btnn" offset={-30} duration={1500}>
          <i class="bi bi-briefcase"></i> Hire Me
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
