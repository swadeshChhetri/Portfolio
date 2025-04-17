import React from "react";
import "./expertise.css";

const ExpertiseSection = () => {
  return (
    <section id="expertises">
      <h2 className="gf_h2 heading">
        <i className="bi bi-laptop"></i>
        Skill<span> Expertise</span>
      </h2>

      <div className="expertises-container grid grid-cols-4 gap-4">
        {/* Step 1: Core Frontend Technologies */}
        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </div>

        {/* Step 2: Frameworks & Libraries */}
        <div
          className="expertise-box"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
        </div>

        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
        </div>

        {/* Step 3: Styling Tools */}
        <div
          className="expertise-box"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            className="w-20 h-20"
            alt="Tailwind CSS"
          />
        </div>

        {/* Step 4: Backend & Database */}
        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
        </div>

        {/* Step 6: Programming Languages */}
        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        </div>

        {/* Step 7: Tools & Utilities */}
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
