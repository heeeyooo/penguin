import "./About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    let chars = document.querySelectorAll(".main-info-about-me span");
    chars.forEach((char, index) => {
      setTimeout(() => {
        setTimeout(() => {
          char.classList.add("active-lol");
        }, index * 100);
      }, 4000);
    });
  }, []);

  return (
    <div className="about-me-container section" id="section1">
      <h1 className="main-info-about-me">
        <span>H</span>
        <span>i</span>
        <span>,</span>
        <span> I</span>
        <span>'</span>
        <span>m </span>
        <span>S</span>
        <span>t</span>
        <span>e</span>
        <span>p</span>
        <span>a</span>
        <span>n </span>
        <span>D</span>
        <span>o</span>
        <span>r</span>
        <span>d</span>
        <span>i</span>
        <span>a</span>
        <span>i</span>
        <br />
        <span>F</span>
        <span>r</span>
        <span>o</span>
        <span>n</span>
        <span>t </span>
        <span>e</span>
        <span>n</span>
        <span>d </span>
        <span>D</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
      </h1>
      <p className="info-about-me">
        I create high quality minimalistic projects that will charm the
        <br />
        viewer with their transitions and ease of use. Currently looking for
        <br />a job and learning by myself. Gym enjoyer
      </p>
      <div className="about-btn-container">
        <a className="about-btn" href="#section4">
          Contact me
        </a>
      </div>
    </div>
  );
}

export default About;
