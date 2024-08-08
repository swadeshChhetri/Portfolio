import React from "react";
import "./about.css";

const AboutSection = () => {
  return (
    <section class="about" id="about">
      <div class="about-container">
        <div
          class="img-container"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src="img/profile.JPG" class="img-cont" alt="" />
        </div>
        <div class="about-me" data-aos="fade-left" data-aos-duration="1500">
          <h2 class="heading">
            ABOUT<span>Me</span>
          </h2>
          <p>
            My name is Swadesh Chhetri, and I am currently residing in
            Yeshwantpur. I hold a Bachelor's degree in Literature with honors,
            where I secured the second position in my college. I am skilled in
            HTML, CSS, JavaScript, Bootstrap, React + Redux, Java, and Git for
            version control. I have also earned certifications in Java and
            coding from a computer training center, and in HTML, CSS, and
            JavaScript from Infosys Springboard. I have successfully completed
            three major projects: a Bank Management System, an E-book Store, and
            a Social Media UI. <br />My strong technical foundation and hands-on
            experience have prepared me well to contribute effectively as a web
            developer. I am confident in my ability to meet project expectations
            and am excited about the opportunity to join IT companies.
          </p>
          <a href="#" class="btnn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
