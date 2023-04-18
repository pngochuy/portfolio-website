import "./header.css";
import HeaderImage from "../../assests/header_pic.jpg";
import data from "./data.js";

function Header() {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <p className="header__profile-ques">Who Am I ?</p>
          <h2>About Me</h2>
          <p className="header__profile-desc">
            Hi, I'm <span className="highlight">Pham Ngoc Huy</span>. Nice to
            meet you today. I'm currently studying as second-year student at FPT
            University, Da Nang, Viet Nam. My interest in web development when I
            was high school. Well-organised person, problem solver with high
            attention to detail. If you are interested in my projects, please
            don't hesitate to contact me directly.
          </p>
          <div className="header__cta">
            <a href="#contact" className="btn primary">
              Start a conversation
            </a>
            <a href="#project" className="btn">
              My Projects
            </a>
          </div>
        </div>
        <div className="header__img">
          <img src={HeaderImage} alt="Header Portail" />
        </div>

        <div className="header__socials">
          {data.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              {item.icon}
            </a>
          ))}
          <span className="header__line"></span>
        </div>
      </div>
    </section>
  );
}

export default Header;
