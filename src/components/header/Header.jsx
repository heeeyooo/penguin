import "./Header.css";
import Resume from "./../../pdf/heeeyooo-resume.pdf";
import BurgerBtn from "./../burgerBtn/BurgerBtn";

function Header() {
  addEventListener("scroll", () => {
    document
      .querySelector(".burger-button")
      .classList.remove("active-burger-button");
    document.querySelector(".header").classList.remove("active-header");
    document.querySelector(".header-nav").classList.remove("active-header-nav");
    document
      .querySelector(".header-socials")
      .classList.remove("active-header-socials");
    if (window.scrollY > 100) {
      document.querySelector(".header").classList.add("header-scroll");
    } else {
      document.querySelector(".header").classList.remove("header-scroll");
    }
  });

  let lastScrollTop = 0;

  addEventListener("scroll", () => {
    let header = document.querySelector(".header");

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.transform = "translateY(-120px)";
    } else {
      header.style.transform = "translateY(0px)";
    }
    lastScrollTop = scrollTop;
  });

  // SOLUTION FOR HEADER ON MOBILE
  addEventListener("scroll", () => {
    let header = document.querySelector(".header");

    if (window.pageYOffset <= 0 || window.pageYOffset <= 1000) {
      header.style.transform = "translateY(0px)";
    }
  });

  addEventListener("scroll", () => {
    const linkHome = document.querySelector(".header-link-home");
    const linkSkills = document.querySelector(".header-link-skills");
    const linkProjects = document.querySelector(".header-link-projects");
    const linkContactMe = document.querySelector(".header-link-contact-me");

    if (
      document.querySelector("#section1").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.add("active-link");
      linkSkills.classList.remove("active-link");
      linkProjects.classList.remove("active-link");
      linkContactMe.classList.remove("active-link");
    } else if (
      document.querySelector("#section2").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.remove("active-link");
      linkSkills.classList.add("active-link");
      linkProjects.classList.remove("active-link");
      linkContactMe.classList.remove("active-link");
    } else if (
      document.querySelector("#section3").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.remove("active-link");
      linkSkills.classList.remove("active-link");
      linkProjects.classList.add("active-link");
      linkContactMe.classList.remove("active-link");
    } else if (
      document.querySelector("#section4").getBoundingClientRect().bottom > 200
    ) {
      linkHome.classList.remove("active-link");
      linkSkills.classList.remove("active-link");
      linkProjects.classList.remove("active-link");
      linkContactMe.classList.add("active-link");
    }
  });

  return (
    <header className="header">
      <div className="logo-btn-container">
        <a href="#section1" className="header-logo">
          {/* <img className="header-logo js-logo" src={logo} alt="heeeyooo" /> */}
          heeeyooo
        </a>
        <BurgerBtn />
      </div>
      <ul className="header-nav">
        <li>
          <a className="header-link-home active-link" href="#section1">
            Home
          </a>
        </li>
        <li>
          <a className="header-link-skills" href="#section2">
            Skills
          </a>
        </li>
        <li>
          <a className="header-link-projects" href="#section3">
            Projects
          </a>
        </li>
        <li>
          <a className="header-link-contact-me" href="#section4">
            Contact
          </a>
        </li>
        <li>
          <div className="resume-container">
            <a className="header-link-resume" href={Resume} target="_blank">
              Resume
            </a>
            <a
              className="header-link-resume-download"
              href={Resume}
              target="_blank"
              download={true}
            >
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </li>
      </ul>
      <div className="header-socials">
        <a
          className="social-github"
          href="https://github.com/heeeyooo"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="social-instagram"
          href="https://www.instagram.com/heeeyooo_?igsh=N2ZreTdicmF1dDlk&utm_source=qr"
          target="_blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          className="social-facebook"
          href="https://www.facebook.com/stepan.dordyay.5"
          target="_blank"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          className="social-twitter"
          href="https://twitter.com/Heeeyooo_"
          target="_blank"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          className="social-twitch"
          href="https://www.twitch.tv/heeeyooo_"
          target="_blank"
        >
          <i className="fa-brands fa-twitch"></i>
        </a>
        <a
          className="social-linkedin"
          href="https://www.linkedin.com/in/stepan-dordiai-245715310"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
