const Services = () => {
  return (
    <div className="container" id="services">
      <div className="container__content">
        <h2>Services</h2>
        <div className="services__entries">
          <ServiceEntry
            heading={"Frontend Development"}
            technologies={[
              "ReactJS",
              "NextJS",
              "Typescript",
              "React Native",
              "Redux",
            ]}
          />
          <ServiceEntry
            heading={"Backend Development"}
            technologies={[
              "NodeJs",
              "ExpressJs",
              "MongoDB",
              "Mongoose",
              "REST",
              "axios",
            ]}
          />
          <ServiceEntry
            heading={"Other Technologies"}
            technologies={[
              "HTML5",
              "CSS3",
              "Bootstrap",
              "Tailwind",
              "Figma",
              "Git",
              "npm",
              "vite",
              "vercel",
              "vercel",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
const ServiceEntry = ({ heading, technologies }) => {
  return (
    <div className="card">
      <h3>{heading}</h3>
      <div className="underline"></div>
      <div className="technologies">
        {technologies.map((technology) => (
          <h5>{technology}</h5>
        ))}
      </div>
    </div>
  );
};
