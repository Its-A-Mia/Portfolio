import GitHub from '../icons/brands/GitHub';
import LinkedIn from '../icons/brands/LinkedIn';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="golden-border golden-border-top"></div>
        <div className="footer-socials-container">
          <a className="footer-link footer-github-link" href="https://github.com/Its-A-Mia" target="_blank">
            <GitHub />
          </a>
          <a
            className="footer-link footer-linked-in-link"
            href="https://www.linkedin.com/in/mia-purdun/"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </div>
        <p>© Mia Purdun 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
