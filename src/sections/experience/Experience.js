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
            interactive layouts.
          </p>
          <p>
            Building upon my experience as a frontend developer over the past
            year, I have expanded my expertise into backend development,
            specializing in <span className="highlight-text">PHP</span> (one of
            the most widely used server-side scripting languages) and{" "}
            <span className="highlight-text">Laravel</span> (a PHP web
            application framework). I have a deep understanding of MVC
            architecture and have utilized Laravel's features to streamline
            database interactions, handle routing, and manage authentication
            seamlessly. I am continuously motivated to expand my knowledge and
            stay updated with the latest trends and best practices in both
            frontend and backend development. This dual expertise positions me
            as a versatile developer capable of bringing comprehensive solutions
            to the projects I undertake.
          </p>
          {/* <p>
            Building upon my experience as a frontend developer over the past
            year, I have expanded my expertise into backend development,
            specializing in PHP and Laravel. In the backend realm, I have
            successfully crafted robust and scalable web applications that
            leverage the power of PHP, one of the most widely used server-side
            scripting languages. My proficiency in Laravel, a PHP web
            application framework, has allowed me to create efficient and
            maintainable backend solutions. I have a deep understanding of MVC
            architecture and have utilized Laravel's features to streamline
            database interactions, handle routing, and manage authentication
            seamlessly. Throughout my backend journey, I've worked on diverse
            projects, including e-commerce platforms, content management
            systems, and API development. Leveraging Laravel's expressive syntax
            and comprehensive toolset, I've contributed to the creation of
            secure and performant applications. My ability to seamlessly
            integrate frontend and backend components enables me to deliver
            end-to-end solutions that not only meet user expectations on the
            front end but also ensure robust functionality and data management
            on the backend. This holistic approach to web development allows me
            to build cohesive and feature-rich applications. I am continuously
            motivated to expand my knowledge and stay updated with the latest
            trends and best practices in both frontend and backend development.
            This dual expertise positions me as a versatile developer capable of
            bringing comprehensive solutions to the projects I undertake.
          </p> */}
          <p>
            Let's get started! Check  out my resume below. Visit my{" "}
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
