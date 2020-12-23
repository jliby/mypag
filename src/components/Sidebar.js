import React from "react";

import indeed from "../assets/icons/indeed-logo.svg";
import discord from "../assets/icons/discord.svg";
import github from "../assets/icons/github-icon.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import gator from "../assets/icons/gator.png";

import resume from "../assets/resume.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:jluberisse@ufl.edu");
  };
  return (
    <div className="sidebar">
      <img src={gator} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        James <span>Luberisse</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">Student</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="#">
          <img src={discord} alt="discord" className="sidebar__icon mr-3" />
        </a>
        <a href="#">
          <img src={indeed} alt="indeed" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="#">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Gainesville, FL
        </div>
        <div className="sidebar__item">jluberisse@ufl.edu</div>
      </div>
      <div className="sidebar__item sidebar__email " onClick={handleEmailMe}>
        email me
      </div>
    </div>
  );
};

export default Sidebar;
