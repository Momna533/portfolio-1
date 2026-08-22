const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="container__content">
        <h2>My Recent Work</h2>
        <div className="project__entries">
          <ProjectEntry
            heading={"Personal Portfolio"}
            desc={
              "A portfolio website built with HTML, CSS, and JavaScript featuring responsive design and smooth animations."
            }
            technologies={["html5", "css3", "javascript"]}
            demoHref={"https://portfolio-lac-rho-5zxoj2o3ig.vercel.app/"}
            githubHref={"https://github.com/Momna533/portfolio"}
          />
          <ProjectEntry
            heading={"Landing Page"}
            desc={
              "Coffee Shop landing page built with HTML, CSS, and JavaScript featuring responsive design and smooth animations."
            }
            technologies={["html5", "css3", "javascript"]}
            demoHref={"https://landing-page-two-pink-76.vercel.app/"}
            githubHref={"https://github.com/Momna533/landing-page"}
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
