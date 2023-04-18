import "./experience.css";
import AboutImage from "../../assests/experience_pic.jpg";
import CV from "../../assests/CV.pdf";
import Card from "../../components/Card";
import data from "./data";

function Experience() {
  return (
    <section id="experience">
      <div className="container experience__container">
        <div className="experience__left">
          <div className="experience__portrait">
            <img src={AboutImage} alt="experience Img" />
          </div>
        </div>
        <div className="experience__right">
          <div className="experience__title-highlight">
            <h2>Experience</h2>
          </div>

          <div className="experience__cards">
            {data.map((item, index) => (
              <Card key={item.id} className="experience__card">
                <span className="experience__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Since beginning my journey as a frontend developer nearly 1 years
            ago, I’ve done successful responsive websites that are fast, easy to
            use, and built with best practices. The main area of my expertise is
            front-end development <span className="highlight-text">HTML</span>,{" "}
            <span className="highlight-text">CSS</span>,{" "}
            <span className="highlight-text">JS</span>,{" "}
            <span className="highlight-text">ReactJS</span> building small and
            medium web apps, custom plugins, features, animations, and coding
            interactive layouts. I'm always motivated to do more!
          </p>
          <p>
            Let's get started! Check out my resume below. Visit my{" "}
            <a
              href="https://github.com/pngochuy"
              className="experience__card-github"
            >
              Github
            </a>{" "}
            profile for more details or just{" "}
            <a href="#contact" className="experience__card-contact">
              contact
            </a>{" "}
            me.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
