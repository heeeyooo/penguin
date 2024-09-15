import img4 from "./img/gym-site.jpg";
import img2 from "./img/gallery.png";
import img3 from "./img/cloud.png";
import img1 from "./img/yagoda-karpat.png";
import img5 from "./img/tiermaker.png";
import "./Project.css";

function Project() {
  const DATA = [
    {
      id: 1,
      link: "https://lustrous-lamington-032fa5.netlify.app/",
      gitHubLink: "#",
      title: "yagodakarpat",
      img: img1,
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
      class: "project1-container",
      classImg: "img-title",
      altImg: "yagodakarpat",
    },
    {
      id: 2,
      link: "https://heeeyooo-gray.netlify.app/",
      gitHubLink: "#",
      title: "gray",
      img: img2,
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
        <i className="fa-brands fa-sass"></i>,
      ],
      class: "project2-container",
      classImg: "img-title",
      altImg: "gray",
    },
    {
      id: 3,
      link: "https://heeeyooo-cloud.netlify.app/",
      gitHubLink: "#",
      title: "cloud",
      img: img3,
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
      class: "project3-container",
      classImg: "img-title-full",
      altImg: "cloud",
    },
    {
      id: 4,
      link: "https://heeeyooo-fate.netlify.app/",
      gitHubLink: "#",
      title: "fate",
      img: img4,
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
      class: "project4-container",
      classImg: "img-title",
      altImg: "fate",
    },
    {
      id: 5,
      link: "https://heeeyooo-tiermaker.netlify.app/",
      gitHubLink: "#",
      title: "tiermaker",
      img: img5,
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
      class: "project5-container",
      classImg: "img-title-full",
      altImg: "tiermaker",
    },
  ];

  return (
    <>
      {DATA.map((el) => {
        return (
          <div className={el.class} key={el.id}>
            <img className={el.classImg} src={el.img} alt={el.altImg} />
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
              <div className="project-skills">{el.skills}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Project;
