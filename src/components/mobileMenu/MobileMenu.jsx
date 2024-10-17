import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
import "./../burgerBtn/BurgerBtn.css";
import BurgerBtn from "../burgerBtn/BurgerBtn";

function MobileMenu() {
    // const closeBtn = () => {
    //   let mobileMenu = document.getElementById("mobile-menu");
    //   mobileMenu.style.display = "none";
    //   document.body.style.overflowY = "auto";
    // };

    const closeMenu = () => {
        let mobileMenu = document.getElementById("mobile-menu");
        const burgerBtn = document.querySelector(".burger-button");

        mobileMenu.classList.remove("menu-display-btn");
        document.body.classList.remove("body-overflow-btn");
        //  const mobileMenu = document.getElementById("mobile-menu");
        burgerBtn.classList.toggle("active-burger-button");
    };

    //   .body-overflow-btn {
    //   overflow-y: hidden;
    // }

    // .menu-display-btn {
    //   display: flex;
    // }

    addEventListener("scroll", () => {
        const links1 = document.querySelectorAll(".menu-link1");
        const links2 = document.querySelectorAll(".menu-link2");
        const links3 = document.querySelectorAll(".menu-link3");
        const links4 = document.querySelectorAll(".menu-link4");

        if (window.scrollY < 700) {
            links1.forEach((link) => {
                link.classList.add("active-link");
            });
            links2.forEach((link) => {
                link.classList.remove("active-link");
            });
            links3.forEach((link) => {
                link.classList.remove("active-link");
            });
        } else if (window.scrollY < 1400) {
            links1.forEach((link) => {
                link.classList.remove("active-link");
            });
            links2.forEach((link) => {
                link.classList.add("active-link");
            });
            links3.forEach((link) => {
                link.classList.remove("active-link");
            });
        } else if (window.scrollY < 4100) {
            links3.forEach((link) => {
                link.classList.add("active-link");
            });
            links2.forEach((link) => {
                link.classList.remove("active-link");
            });

            links4.forEach((link) => {
                link.classList.remove("active-link");
            });
            links1.forEach((link) => {
                link.classList.remove("active-link");
            });
        } else if (window.scrollY > 4100) {
            links4.forEach((link) => {
                link.classList.add("active-link");
            });
            links2.forEach((link) => {
                link.classList.remove("active-link");
            });
            links3.forEach((link) => {
                link.classList.remove("active-link");
            });
            links1.forEach((link) => {
                link.classList.remove("active-link");
            });
        }
    });

    // const activeLinkHome = "link1 js-text menu-link1 active-link";
    // const activeLinkSkills = "link2 js-text menu-link2 active-link";
    // const activeLinkProjects = "link3 js-text menu-link3 active-link";
    // const activeLinkContact = "link4 js-text menu-link4 active-link";
    // const linkHome = "link1 js-text menu-link1";
    // const linkSkills = "link2 js-text menu-link2";
    // const linkProjects = "link3 js-text menu-link3";
    // const linkContact = "link4 js-text menu-link4";

    return (
        <>
            <div id="mobile-menu" className="menu-container">
                {/* <button
          className="exit-menu-button icon-color"
          onClick={closeBtn}
          id="closeBtn"
        >
          <i className="fa-solid fa-xmark"></i>
        </button> */}
                {/* <BurgerBtn /> */}
                <div className="link-menu-container">
                    {/* <NavLink
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? activeLinkHome : linkHome)}
            to="/"
          >
            Home
          </NavLink> */}
                    <a
                        onClick={closeMenu}
                        className="link1 menu-link1 active-link"
                        href="#section1"
                    >
                        Home
                    </a>
                    {/* <NavLink
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? activeLinkSkills : linkSkills
            }
            to="/skills"
          >
            Skills
          </NavLink> */}
                    <a
                        onClick={closeMenu}
                        className="link2 menu-link2"
                        href="#section2"
                    >
                        Skills
                    </a>
                    {/* <NavLink
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? activeLinkProjects : linkProjects
            }
            to="/portfolio"
          >
            Projects
          </NavLink> */}
                    <a
                        onClick={closeMenu}
                        className="link3 menu-link3"
                        href="#section3"
                    >
                        Projects
                    </a>
                    {/* <NavLink
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? activeLinkContact : linkContact
            }
            to="/contact"
          >
            Contact me
          </NavLink> */}
                    <a
                        onClick={closeMenu}
                        className="link4 menu-link4"
                        href="#section4"
                    >
                        Contact me
                    </a>
                    <div className="resume-container">
                        <a className="link5" href="">
                            Resume
                        </a>
                        <a className="link5" href="">
                            <i className="fa-solid fa-download"></i>
                        </a>
                    </div>
                </div>

                <div className="menu-socials-icons">
                    <a className="icon-color" href="" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a className="icon-color" href="" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a className="icon-color" href="" target="_blank">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a className="icon-color" href="" target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a className="icon-color" href="" target="_blank">
                        <i className="fa-brands fa-twitch"></i>
                    </a>
                    <a className="icon-color" href="" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
