import React from "react";
import "./about.css";

const AboutSection = () => {
  return (
    <>
      <section style={{ padding: "50px" }} id="about">
        <h2 className="gf_h2 heading">
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
              <h3>
                <strong>Hi, I'm Swadesh</strong>
              </h3>{" "}
              <h3 style={{ marginBottom: "15px" }}>
                <strong>Full-Stack Developer | Bengaluru, India</strong>
              </h3>
              I am a passionate and hardworking Full-Stack Web Application
              Developer with hands-on experience in building real-world web
              solutions.
              <br />
              I specialize in creating responsive, user-friendly applications
              using technologies like HTML, CSS, JavaScript, Laravel, Next.js,
              TypeScript, and Tailwind CSS.
              <br />
              I have successfully developed and deployed a Company Finance
              Management Portal, showcasing my ability to handle end-to-end
              project development and deliver impactful results.
              <br />
              Additionally, I gained valuable industry exposure through a
              Full-Stack Development internship with a Tamil Nadu-based company.
              <br />
              Currently, I’m working at a Bengaluru-based startup, where I
              contribute to both front-end and back-end development.
              <br />
              I thrive in collaborative environments and love turning creative
              ideas into efficient, scalable solutions.
              <br />
              My goal is to build meaningful applications that solve real-world
              problems and bring value to users and businesses alike.
            </p>

            <a
              className="btnn"
              href="https://drive.google.com/file/d/1xZXaREMOSTXD5Epqx6D7BIzSJYF8HuoA/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
