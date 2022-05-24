import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

function Resume({ menu, changeMenu }) {
  useEffect(() => {
    changeMenu(1);
  }, [changeMenu]);

  return (
    <div className="resume">
      <div className="resume__header">
        <h1 className="myname">Azeez Shola</h1>
        <p className="mystack">Frontend Developer</p>
      </div>

      <div className="resume__description">
        <p className="word">
          A Frontend developer aspiring to become a fullstack javascript
          developer, I love bringing out ideas to live with my coding skills, I
          develop websites and mobbile apps with good UI and responsiveness.I am
          skilled in implementing core frontend development tasks including API
          integration, Proficient in liasing with team members and remote client
          to effectively conduct requirement gathering and optimize solution as
          per client requirements.
        </p>
      </div>

      <div className="skills">
        <div className="section__header">
          <p className="section__type">Skills</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          HTML, CSS, SASS, Javascript, React/React-Native, Styled Components,
          Context API, Firebase, Git.
        </div>
      </div>
      <div className="skills">
        <div className="section__header">
          <p className="section__type familiar">Familiar With</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          PWA's, NodeJS, Express, MongoDB, SQL, Web Sockets.
        </div>
      </div>

      <div className="Experience">
        <div className="section__header">
          <p className="section__type">Experience</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          <div className="job">
            <p className="job__title">
              Ikarely health, <span>frontend developer(contract)</span>
            </p>
            <p className="job__duration">december 2020 - june 2021</p>
            <p className="about__job">
              I joined the team of health care professionals and software
              engineers in building an health care service platform, Implemented
              the API's and built figma components using REACT JS, CSS and
              Material UI managed the app state using MobX and Context API.
            </p>
          </div>

          <div className="job">
            <p className="job__title">
              Enye Cohort, <span>frontend developer(Test)</span>
            </p>
            <p className="job__duration">march 2021</p>
            <p className="about__job">
              Created User interface based on the datas we get back from the API
              provided to us and also integrated the API to the project, Added
              some functionality such as filtering, searching and pagination
              with a bit of animated flow using CSS animations.
            </p>
          </div>
        </div>
      </div>

      <div className="Education">
        <div className="section__header">
          <p className="section__type">Education</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body education">
          BTech. Computer Science and Engineering at Ladoke Akintola University
          of Technology <span className="education__year">2018 - Present</span>
        </div>
      </div>

      <div className="Projects">
        <div className="section__header">
          <p className="section__type">Projects</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          Links to my works can be found on{" "}
          <Link to="/work">staz.dev/work</Link>
        </div>
      </div>
    </div>
  );
}

export default Resume;
