import React from "react";
import "./about.css";

const AboutSection = () => {
  return (
    <>
      <section style={{padding: "50px"}}  id="about">
      <h2 className="gf_h2 text-dark heading"  >
              <i className="bi bi-person-fill-check"></i>
              ABOUT<span>Me</span>
            </h2>
        <div className="about-container">
          <div
            className="img-container"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="img/profile.JPG" className="img-cont" alt="" />
          </div>
          <div
            className="about-me"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p>
              <h3><strong>Hi, I'm Swadesh</strong></h3> <h3 style={{marginBottom:'15px'}}><strong>Frontend Developer | Bengaluru, India</strong></h3>
              I am a passionate and hardworking professional with experience in Full-Stack Web Development. I enjoy building user-friendly and efficient solutions using technologies like HTML, CSS, JavaScript, and modern frameworks. I have worked on developing a company portal, which reflects my ability to manage projects effectively and deliver impactful results. Additionally, I gained valuable industry experience through a Full-Stack web development internship with a Tamil Nadu-based company. I thrive in team environments where I can collaborate and bring creative ideas to life. My goal is to create meaningful projects that solve real-world problems and add value to businesses.
            </p>
            <a  className="btnn" href="https://drive.google.com/file/d/1U9qOeWDVS3J1uPXoeDO80cJ3yVYBRNfj/view?usp=drive_link">Resume</a>
            
          </div>
        </div>
      </section>
      </>
  );
};

export default AboutSection;