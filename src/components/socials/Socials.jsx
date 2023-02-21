import './Socials.css';
import GitHub from '../icons/GitHub';
import LinkedIn from '../icons/LinkedIn';

const Socials = () => {
  return (
    <aside className="socials-container">
      <a className="socials-github-link" href="https://github.com/Its-A-Mia" target="_blank">
        <GitHub />
      </a>
      <a className="socials-linked-in-link" href="https://www.linkedin.com/in/mia-purdun/" target="_blank">
        <LinkedIn />
      </a>
    </aside>
  );
};

export default Socials;
