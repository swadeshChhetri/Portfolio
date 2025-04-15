import React from "react";
import "./work.css";

const ProjectSection = () => {
  return (
    <section className="project red" id="project">
      <h2 className="gf_h2 heading">
        <i className="bi bi-briefcase-fill"></i>
        Featured<span> Work</span>
      </h2>
      <div className="project-container">

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/E-BookStore.png" alt="" />
          <div className="project-layer">
            <h4>E-BookStore</h4>
            <p></p>
            <a
              href="https://swadeshchhetri.github.io/E_BookStore/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/QuickCart.png" alt=" " />
          <div className="project-layer">
            <h4>QuickCart</h4>
            <p></p>
            <a
              href="https://swadeshchhetri.github.io/QuickCart/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/dashboard.jpg" alt=" " />
          <div className="project-layer">
            <h4>Finance-Management-Portal</h4>
            <p>
              Email ID : swadesh806@gmail.com <br />
              Password : swadesh@806 <br />
              Internship Project – A real-world project showcasing functional development
            </p>
            
            <a
              href="https://crisscrosstamizh.in/WDI-OCT-24/fmp/FinancialManagementSystem/Pages/login.html"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
            <p>Responsive Design Demo – Highlights my responsive design expertise</p>
              <a
              href="https://swadeshchhetri.github.io/FinanceManagementPortal/index.html"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>

          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/todo.png" alt=" " />
          <div className="project-layer">
            <h4>ToDo-list App</h4>

            <a
              href="https://swadeshchhetri.github.io/Todo-list/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/Calculator.png" alt=" " />
          <div className="project-layer">
            <h4>Calculator</h4>
            <a
              href="https://swadeshchhetri.github.io/Calculator/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/connect4.png" alt=" " />
          <div className="project-layer">
            <h4>Connect4</h4>
            <a
              href="https://swadeshchhetri.github.io/Connect4/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>
        
        <div
          style={{textAlign: "center;"}}
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/AI.jpeg" alt=" " />
          <div className="project-layer">
            <h4>AI- Powered Task Automation Tool</h4>
            <p>WORKING ON IT...</p>
            <a
              href=""
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
