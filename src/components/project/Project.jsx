import img4 from "./img/gym-site.jpg";
import img2 from "./img/gallery.png";
import img3 from "./img/cloud.png";
import img1 from "./img/yagoda-karpat.png";
import img5 from "./img/template.jpg";
import "./Project.css";

function Project() {
    const DATA = [
        {
            id: 1,
            link: "#",
            gitHubLink: "#",
            title: "01",
            img: img1,
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project1-container",
            classImg: "img-title",
        },
        {
            id: 2,
            link: "#",
            gitHubLink: "#",
            title: "02",
            img: img2,
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
                <i className="fa-brands fa-sass"></i>,
            ],
            class: "project2-container",
            classImg: "img-title",
        },
        {
            id: 3,
            link: "#",
            gitHubLink: "#",
            title: "03",
            img: img3,
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project3-container",
            classImg: "img-title-full",
        },
        {
            id: 4,
            link: "#",
            gitHubLink: "#",
            title: "04",
            img: img4,
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project4-container",
            classImg: "img-title",
        },
        {
            id: 5,
            link: "#",
            gitHubLink: "#",
            title: "05",
            img: img5,
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project5-container",
            classImg: "img-title-full",
        },
    ];

    return (
        <>
            {DATA.map((el) => {
                return (
                    <div className={el.class} key={el.id}>
                        <img
                            className={el.classImg}
                            src={el.img}
                            alt={el.altImg}
                        />
                        <div className="project-content-container">
                            <h4 className="project-name">{el.title}</h4>
                            <p className="project-info"></p>
                            <div className="link-project-container">
                                <a href={el.link} target="_blank">
                                    demo <i className="fa-solid fa-link"></i>
                                </a>
                                <a href={el.gitHubLink} target="_blank">
                                    github <i className="fa-solid fa-link"></i>
                                </a>
                            </div>
                            <div className="project-skills">
                                {el.skills.forEach((skill, index) => {
                                    return <div key={index}>{skill}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Project;
