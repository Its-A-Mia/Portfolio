import './Projects.css';
import ProjectsCard from './ProjectsCard';
import ProjectsNav from './ProjectsNav';

const Projects = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <ProjectsNav />
        <ProjectsCard />
      </div>
    </section>
  );
};

export default Projects;
