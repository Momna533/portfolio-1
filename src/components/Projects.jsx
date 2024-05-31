import adoptAPetImg from "../images/adopt-a-pet.jpeg";
import portfolioImg from "../images/portfolio-1.jpeg";
import adhocImg from "../images/adhoc.jpeg";

function Project() {
  return (
    <>
      <div className="projects" id="projects">
        <div className="projects_content">
          <h2>My Recent Work</h2>
          <p>Here are a few projects I`ve worked on recently</p>
          <div className="underline"></div>
          <div className="projects_content_entries">
            <div className="projects_content_entry">
              <div className="projects_content_entry_img">
                <img
                  className="projects_content_entry_img_image"
                  src={adoptAPetImg}
                  alt="projects_img"
                />
              </div>
              <div className="projects_content_entry_text">
                <h3>Adopt a pet</h3>
                <h4>Featured Project</h4>
                <p>
                  A project using React Router to add client-side routing to a
                  React Application. It is a pet adoption website that allows
                  users to view all the adoptable pets of a particular species
                  and view the profiles of specific adoptable pets.
                </p>
                <div className="projects_content_entry_text_links">
                  <a
                    target="_blank"
                    href="https://adopt-a-pet-topaz.vercel.app/"
                  >
                    demo
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Momna533/adopt-a-pet"
                  >
                    github
                  </a>
                </div>
              </div>
            </div>
            <div className="projects_content_entry">
              <div className="projects_content_entry_img">
                <img
                  className="projects_content_entry_img_image"
                  src={portfolioImg}
                  alt="projects_img"
                />
              </div>
              <div className="projects_content_entry_text">
                <h3>Personal Portfolio</h3>
                <h4>Featured Project</h4>
                <p>Personal Portfolio showing my works.</p>
                <div className="projects_content_entry_text_links">
                  <a
                    target="_blank"
                    href="https://portfolio-0-kappa.vercel.app/"
                  >
                    demo
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Momna533/portfolio-0"
                  >
                    github
                  </a>
                </div>
              </div>
            </div>
            <div className="projects_content_entry">
              <div className="projects_content_entry_img">
                <img
                  className="projects_content_entry_img_image"
                  src={adhocImg}
                  alt="projects_img"
                />
              </div>
              <div className="projects_content_entry_text">
                <h3>Adhoc Website</h3>
                <h4>Featured Project</h4>
                <p>
                  An office administration website using the knowledge of React
                  Bootstrap.
                </p>
                <div className="projects_content_entry_text_links">
                  <a target="_blank" href="https://adhoc-seven.vercel.app/">
                    demo
                  </a>
                  <a target="_blank" href="https://github.com/Momna533/Adhoc">
                    github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
