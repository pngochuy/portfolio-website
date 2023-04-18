import "./footer.css";
import { permalinksData, socialsData } from "./data";

function Footer() {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer__main">
          <div className="footer__socials">
            <h2 className="footer__socials-title">Follow Me</h2>
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
            <h2 className="footers__permalinks-title">Useful links</h2>
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
            Copyright {new Date().getFullYear()} &copy;. All rights reserved and
            made by <b>HuyPNDev</b>.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
