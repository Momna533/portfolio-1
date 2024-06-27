function Project() {
  return (
    <>
      <div className="container" id="projects">
        <div className="container__content projects__content">
          <h2>My Recent Work</h2>
          <div className="project__entries">
            <ProjectEntry
              heading={"Reddit app"}
              desc={
                "A project using redux for state management in a Reddit Application."
              }
              technologies={["react", "redux", "javascript"]}
              demoHref={"https://reddit-app-xi.vercel.app/"}
              githubHref={"https://github.com/Momna533/reddit-app"}
            />
            <ProjectEntry
              heading={"Ecommerce app"}
              desc={
                "A project using React Redux for state management in a React Ecommerce Application."
              }
              technologies={["react", "redux", "javascript"]}
              demoHref={"https://redux-ecommerce-app-kappa.vercel.app/"}
              githubHref={"https://github.com/Momna533/redux-ecommerce-app"}
            />
            <ProjectEntry
              heading={"Adopt a pet"}
              desc={
                "A project using React Router to add client-side routing to a React Application. It is a pet adoption website that allows users to view all the adoptable pets of a particular species and view the profiles of specific adoptable pets."
              }
              technologies={["react", "redux", "javascript"]}
              demoHref={"https://adopt-a-pet-topaz.vercel.app/"}
              githubHref={"https://github.com/Momna533/adopt-a-pet"}
            />
            <ProjectEntry
              heading={"Personal Portfolio"}
              desc={"Personal Portfolio showing my works."}
              technologies={["react", "redux", "javascript"]}
              demoHref={"https://portfolio-0-kappa.vercel.app/"}
              githubHref={"https://github.com/Momna533/portfolio-0"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
const ProjectEntry = ({
  heading,
  desc,
  demoHref,
  githubHref,
  technologies,
}) => {
  return (
    <div className="project__entry">
      <h3>{heading}</h3>
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
