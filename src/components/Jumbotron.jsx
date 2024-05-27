import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      window.scrollTo({
        top: document.querySelector(hash).offsetTop,
        behavior: "smooth",
      });
    }
  }, [hash]);
};
function Jumbotron() {
  useScrollToHash();
  return (
    <>
      <div className="jumbotron" id="home">
        <div className="jumbotron_content">
          <div className="underline"></div>
          <h1>I`m Momna Ijaz</h1>
          <h4>Freelence web and mobile developer</h4>
          <Link to="/#contact" className="jumbotron_btn">
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
