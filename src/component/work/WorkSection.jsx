import React from "react";
import "./work.css";

const ProjectSection = () => {
  return (
    <section class="project" id="project">
      <h2 class="heading">
        My<span>Projects</span>
      </h2>
      <div class="project-container">
        <div
          class="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/1.jpg" alt=" " />
          <div class="project-layer">
            <h4>Bank Mangagement System</h4>
            <p>
              I developed a bank management system as an ATM application using
              Java, Swing, and MySQL. The app features a Swing-based GUI for
              user login and transactions, including withdrawals, deposits,
              balance checks, and transfers. Java handles backend logic and
              MySQL manages user and transaction data.
            </p>
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div
          class="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/2.jpg" alt="" />
          <div class="project-layer">
            <h4>E-BookStore</h4>
            <p>
              I developed a book store web application using React and Redux.
              The application allows users to add and remove items from their
              items bag. Data is stored in a JSON file and fetched to ensure
              consistent and reliable display of book information with real-time
              price updates. React handles the UI components, while Redux
              manages the state, ensuring seamless updates to the shopping bag
              and price calculations.
            </p>
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>

        <div
          class="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/3.jpg" alt=" " />
          <div class="project-layer">
            <h4>Social-Media UI</h4>
            <p>
              I developed a single-page social media user interface using React.
              The interface allows users to like photos. React handles the
              dynamic rendering of content and the state management required for
              the like functionality.
            </p>
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div class="project-box" data-aos="fade-up" data-aos-duration="1500">
          <img src="img/4.jpg" alt=" " />
          <div class="project-layer">
            <h4>MovieStore</h4>
            <h3>Working On....</h3>
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div class="project-box" data-aos="fade-up" data-aos-duration="1500">
          <img src="img/5.jpg" alt=" " />
          <div class="project-layer">
            <h4>FashionMart</h4>
            <h3>Working On....</h3>
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div class="project-box" data-aos="fade-up" data-aos-duration="1500">
          <img src="img/6.jpg" alt=" " />
          <div class="project-layer">
            <h4>Upcoming</h4>
            <p>.......</p>
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
