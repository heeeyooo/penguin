import { useEffect } from "react";
import "./Skills.css";

function Skills() {
  function move(percent, color) {
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo").style.display = "block";
        document.getElementById("demo").innerHTML = width * 1 + "%";
      }
    }
  }
  function move1(percent, color) {
    let elem = document.getElementById("myBar1");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo1").style.display = "block";
        document.getElementById("demo1").innerHTML = width * 1 + "%";
      }
    }
  }
  function move2(percent, color) {
    let elem = document.getElementById("myBar2");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo2").style.display = "block";
        document.getElementById("demo2").innerHTML = width * 1 + "%";
      }
    }
  }
  function move3(percent, color) {
    let elem = document.getElementById("myBar3");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo3").style.display = "block";
        document.getElementById("demo3").innerHTML = width * 1 + "%";
      }
    }
  }
  function move4(percent, color) {
    let elem = document.getElementById("myBar4");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo4").style.display = "block";
        document.getElementById("demo4").innerHTML = width * 1 + "%";
      }
    }
  }
  function move5(percent, color) {
    let elem = document.getElementById("myBar5");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo5").style.display = "block";
        document.getElementById("demo5").innerHTML = width * 1 + "%";
      }
    }
  }
  function move6(percent, color) {
    let elem = document.getElementById("myBar6");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo6").style.display = "block";
        document.getElementById("demo6").innerHTML = width * 1 + "%";
      }
    }
  }
  function move7(percent, color) {
    let elem = document.getElementById("myBar7");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo7").style.display = "block";
        document.getElementById("demo7").innerHTML = width * 1 + "%";
      }
    }
  }

  function move8(percent, color) {
    let elem = document.getElementById("myBar8");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo8").style.display = "block";
        document.getElementById("demo8").innerHTML = width * 1 + "%";
      }
    }
  }

  addEventListener("scroll", () => {
    if (
      document.querySelector(".skills-info").getBoundingClientRect().top <
      window.innerHeight
    ) {
      document.querySelector(".skills-info").classList.add("reveal-info0");
    } else {
      document.querySelector(".skills-info").classList.remove("reveal-info0");
    }
  });

  addEventListener("scroll", () => {
    if (
      document.querySelector(".reveal-skill-wrapper").getBoundingClientRect()
        .top < window.innerHeight
    ) {
      document.querySelector(".skill1").classList.add("reveal-info1");
      document.querySelector(".skill2").classList.add("reveal-info2");
      document.querySelector(".skill3").classList.add("reveal-info3");
      document.querySelector(".skill4").classList.add("reveal-info4");
      document.querySelector(".skill5").classList.add("reveal-info5");
      document.querySelector(".skill6").classList.add("reveal-info6");
      document.querySelector(".skill7").classList.add("reveal-info7");
      document.querySelector(".skill8").classList.add("reveal-info8");
      document.querySelector(".skill9").classList.add("reveal-info9");
    } else {
      document.querySelector(".skill1").classList.remove("reveal-info1");
      document.querySelector(".skill2").classList.remove("reveal-info2");
      document.querySelector(".skill3").classList.remove("reveal-info3");
      document.querySelector(".skill4").classList.remove("reveal-info4");
      document.querySelector(".skill5").classList.remove("reveal-info5");
      document.querySelector(".skill6").classList.remove("reveal-info6");
      document.querySelector(".skill7").classList.remove("reveal-info7");
      document.querySelector(".skill8").classList.remove("reveal-info8");
      document.querySelector(".skill9").classList.remove("reveal-info9");
    }
  });

  return (
    <div className="skills-container section" id="section2">
      <h3 className="skills-info">Skills</h3>
      <div className="reveal-skill-wrapper">
        <div className="skills-grid-container">
          {/* PYTHON */}
          <div className="icon-container skill1">
            <div className="skills-progress-container" id="myBar"></div>
            <i
              onClick={() => move(75, "green")}
              className="fa-brands fa-python skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo"></p>
          </div>
          {/* HTML */}
          <div className="icon-container skill2">
            <div className="skills-progress-container" id="myBar1"></div>
            <i
              onClick={() => move1(96, "tomato")}
              className="fa-brands fa-html5 skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo1"></p>
          </div>
          {/* CSS */}
          <div className="icon-container skill3">
            <div className="skills-progress-container" id="myBar2"></div>
            <i
              onClick={() => move2(65, "skyblue")}
              className="fa-brands fa-css3-alt skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo2"></p>
          </div>
          {/* JS */}
          <div className="icon-container skill4">
            <div className="skills-progress-container" id="myBar3"></div>
            <i
              onClick={() => move3(87, "gold")}
              className="fa-brands fa-square-js skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo3"></p>
          </div>
          {/* GIT */}
          <div className="icon-container skill5">
            <div className="skills-progress-container" id="myBar4"></div>
            <i
              onClick={() => move4(52, "orange")}
              className="fa-brands fa-git-alt skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo4"></p>
          </div>
          {/* GITHUB */}
          <div className="icon-container skill6">
            <div className="skills-progress-container" id="myBar5"></div>
            <i
              onClick={() => move5(52, "orange")}
              className="fa-brands fa-github skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo5"></p>
          </div>
          {/* SASS */}
          <div className="icon-container skill7">
            <div className="skills-progress-container" id="myBar6"></div>
            <i
              onClick={() => move6(87, "fuchsia")}
              className="fa-brands fa-sass skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo6"></p>
          </div>
          {/* FIGMA */}
          <div className="icon-container skill8">
            <div className="skills-progress-container" id="myBar8"></div>
            <i
              onClick={() => move8(75, "thistle")}
              className="fa-brands fa-figma skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo8"></p>
          </div>
        </div>
        <h4 className="current-info">Currently learning</h4>
        <div className="current-grid">
          {/* REACT */}
          <div className="icon-container-current skill9">
            <div className="skills-progress-container" id="myBar7"></div>
            <i
              onClick={() => move7(50, "turquoise")}
              className="fa-brands fa-react skills-icon"
            ></i>
            <p className="skills-progress-percent" id="demo7"></p>
          </div>
        </div>
      </div>
      <p className="skills-progress-info">
        Click the icon to see my skill progress based on{" "}
        <img
          width="30px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/150px-W3Schools_logo.svg.png"
          alt="W3Schools_logo"
        />
      </p>
    </div>
  );
}

export default Skills;
