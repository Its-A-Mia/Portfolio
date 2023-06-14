import './Socials.css';
import GitHub from '../icons/brands/GitHub';
import LinkedIn from '../icons/brands/LinkedIn';

const Socials = () => {
  return (
    <aside className="socials-container">
      <a className="socials-github-link" href="https://github.com/Its-A-Mia" target="_blank">
        <GitHub className={'socials-github-icon'} />
      </a>
      <a className="socials-linked-in-link" href="https://www.linkedin.com/in/mia-purdun/" target="_blank">
        <LinkedIn className={'socials-linked-in-icon'} />
      </a>
    </aside>
  );
};

export default Socials;
