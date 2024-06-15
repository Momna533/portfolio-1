import adoptAPetImg from "../images/adopt-a-pet.jpeg";
import portfolioImg from "../images/portfolio-1.jpeg";
import reduxEcommerceImg from "../images/redux-ecommerce.jpeg";
import redditAppImg from "../images/redditApp.jpeg";
import jammmingAppImg from "../images/jammming.jpeg";

function Project() {
  return (
    <>
      <div className="projects" id="projects">
        <div className="projects_content">
          <h2>My Recent Work</h2>
          <p>Here are a few projects I`ve worked on recently</p>
          <div className="underline"></div>
          <div className="projects_content_entries">
            {/* <div className="projects_content_entry">
              <div className="projects_content_entry_img">
                <img
                  className="projects_content_entry_img_image"
                  src={jammmingAppImg}
                  alt="projects_img"
                />
              </div>
              <div className="projects_content_entry_text">
                <h3>Jammming App</h3>
                <h4>Featured Project</h4>
                <p>
                  A project using spotify api to create playlist in Jammming
                  Application.
                </p>
                <div className="project__btns">
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://reddit-web-flame.vercel.app/"
                    >
                      demo
                    </a>
                  </div>
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://github.com/Momna533/Jamming"
                    >
                      github
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="projects_content_entry">
              <div className="projects_content_entry_img">
                <img
                  className="projects_content_entry_img_image"
                  src={redditAppImg}
                  alt="projects_img"
                />
              </div>
              <div className="projects_content_entry_text">
                <h3>Reddit app</h3>
                <h4>Featured Project</h4>
                <p>
                  A project using redux for state management in a Reddit
                  Application.
                </p>
                <div className="project__btns">
                  <div className="cta__btn">
                    <a target="_blank" href="https://reddit-app-xi.vercel.app/">
                      demo
                    </a>
                  </div>
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://github.com/Momna533/reddit-app"
                    >
                      github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_content_entry">
              <div className="projects_content_entry_img">
                <img
                  className="projects_content_entry_img_image"
                  src={reduxEcommerceImg}
                  alt="projects_img"
                />
              </div>
              <div className="projects_content_entry_text">
                <h3>Ecommerce app</h3>
                <h4>Featured Project</h4>
                <p>
                  A project using React Redux for state management in a React
                  Ecommerce Application.
                </p>
                <div className="project__btns">
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://redux-ecommerce-app-kappa.vercel.app/"
                    >
                      demo
                    </a>
                  </div>
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://github.com/Momna533/redux-ecommerce-app"
                    >
                      github
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="project__btns">
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://adopt-a-pet-topaz.vercel.app/"
                    >
                      demo
                    </a>
                  </div>
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://github.com/Momna533/adopt-a-pet"
                    >
                      github
                    </a>
                  </div>
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
                <div className="project__btns">
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://portfolio-0-kappa.vercel.app/"
                    >
                      demo
                    </a>
                  </div>
                  <div className="cta__btn">
                    <a
                      target="_blank"
                      href="https://github.com/Momna533/portfolio-0"
                    >
                      github
                    </a>
                  </div>
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
