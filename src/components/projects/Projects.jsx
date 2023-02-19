import './Projects.css';
import ProjectsCard from './ProjectsCard';
import ProjectsNav from './ProjectsNav';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container grid">
        <h2 className="section-title">Projects</h2>
        <ProjectsNav />
        <ProjectsCard />
      </div>
    </section>
  );
};

export default Projects;
