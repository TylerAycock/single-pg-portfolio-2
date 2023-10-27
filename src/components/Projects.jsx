import "./Projects.css";
import market from "../assets/images/e-commerce.png";
import agecalc from "../assets/images/age-calculator.png";
import register from "../assets/images/register-pg.png";
import results from "../assets/images/results.png";
import news from "../assets/images/news-preview.jpg";
import todo from "../assets/images/todo.png";

const Projects = () => {
  return (
    <section className="projects__section">
      <div className="projects__top">
        <h2 className="header-l">Projects</h2>
        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </div>

      <div className="projects__container">
        <div className="projects__items">
          <div
            className="projects__item--img"
            style={{ backgroundImage: `url(${market})` }}
          >
            <div className="projects__overlay">
              <a
                href="https://www.youtube.com/watch?v=tPNLxsZ0EWY&t=6s"
                target="blank"
              >
                View Project
              </a>
              <a
                href="https://github.com/TylerAycock/marketplace"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
          <h3>The Market Place</h3>
          <div className="projects__items--skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>

        <div className="projects__items">
          <div
            className="projects__item--img"
            style={{ backgroundImage: `url(${news})` }}
          >
            <div className="projects__overlay">
              <a href="https://splendid-elf-6a5a39.netlify.app/" target="blank">
                View Project
              </a>
              <a
                href="https://github.com/TylerAycock/news__homepage"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
          <h3>News Homepage</h3>
          <div className="projects__items--skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>

        <div className="projects__items">
          <div
            className="projects__item--img"
            style={{ backgroundImage: `url(${todo})` }}
          >
            <div className="projects__overlay">
              <a
                href="https://funny-crostata-f70b20.netlify.app/"
                target="blank"
              >
                View Project
              </a>
              <a
                href="https://github.com/TylerAycock/new-task-list"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
          <h3>Task List</h3>
          <div className="projects__items--skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>

        <div className="projects__items">
          <div
            className="projects__item--img"
            style={{ backgroundImage: `url(${agecalc})` }}
          >
            <div className="projects__overlay">
              <a
                href="https://resplendent-shortbread-eb1e72.netlify.app/"
                target="blank"
              >
                View Project
              </a>
              <a
                href="https://github.com/TylerAycock/age-calculator"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
          <h3>Age Calculator</h3>
          <div className="projects__items--skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>

        <div className="projects__items">
          <div
            className="projects__item--img"
            style={{ backgroundImage: `url(${register})` }}
          >
            <div className="projects__overlay">
              <a
                href="https://astonishing-lollipop-975294.netlify.app/"
                target="blank"
              >
                View Project
              </a>
              <a
                href="https://github.com/TylerAycock/newsletter"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
          <h3>Newsletter Registration</h3>
          <div className="projects__items--skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>

        <div className="projects__items">
          <div
            className="projects__item--img"
            style={{ backgroundImage: `url(${results})` }}
          >
            <div className="projects__overlay">
              <a
                href="https://enchanting-fenglisu-0db0c5.netlify.app/"
                target="blank"
              >
                View Project
              </a>
              <a
                href="https://github.com/TylerAycock/result-summary"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
          <h3>Results Summary</h3>
          <div className="projects__items--skills">
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
