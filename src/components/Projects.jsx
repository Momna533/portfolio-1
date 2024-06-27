const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="container__content">
        <h2>My Recent Work</h2>
        <div className="project__entries">
          <ProjectEntry
            heading={"Reddit app"}
            desc={
              "A project using redux for state management in a Reddit Application."
            }
            technologies={["reactJS", "redux"]}
            demoHref={"https://reddit-app-xi.vercel.app/"}
            githubHref={"https://github.com/Momna533/reddit-app"}
          />
          <ProjectEntry
            heading={"Personal Portfolio"}
            desc={"Personal Portfolio showing my works."}
            technologies={["reactJS"]}
            demoHref={"https://portfolio-0-kappa.vercel.app/"}
            githubHref={"https://github.com/Momna533/portfolio-0"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
const ProjectEntry = ({
  heading,
  desc,
  demoHref,
  githubHref,
  technologies,
}) => {
  return (
    <div className="card">
      <h3>{heading}</h3>
      <div className="underline"></div>
      <h4>{desc.slice(0, 100)}</h4>
      <div className="technologies">
        {technologies.map((technology) => (
          <h5>{technology}</h5>
        ))}
      </div>
      <div className="project__btns">
        <button className="cta__btn">
          <a target="_blank" href={demoHref}>
            demo
          </a>
        </button>
        <button className="cta__btn">
          <a target="_blank" href={githubHref}>
            github
          </a>
        </button>
      </div>
    </div>
  );
};
