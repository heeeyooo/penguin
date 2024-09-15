import Project from "../project/Project";
import "./Projects.css";

function Projects() {
  addEventListener("scroll", () => {
    if (
      document.querySelector(".portfolio-info").getBoundingClientRect().top <
        window.innerHeight &&
      document.querySelector(".portfolio-info").getBoundingClientRect().bottom >
        0
    ) {
      document.querySelector(".portfolio-info").classList.add("reveal-info");
    }
  });
  return (
    <div className="portfolio-container" id="section3">
      <h3 className="portfolio-info">Projects</h3>
      <div className="portfolio-grid-container">
        <Project />
      </div>
    </div>
  );
}

export default Projects;
