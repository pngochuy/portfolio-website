import "./footer.css";
import { permalinksData, socialsData } from "./data";

function Footer() {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer__main">
          <div className="footer__socials">
            <h3 className="footer__socials-title">Useful links</h3>
            <div className="footer__socials-items">
              {socialsData.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={item.id}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <ul className="footers__permalinks">
            <h3 className="footers__permalinks-title">Follow Me</h3>
            <div className="footers__permalinks-items">
              {permalinksData.map((item, index) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className="footer__copyright">
          <small>
            Copyright {new Date().getFullYear()} &copy;. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
