import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
function App() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    const showBackToTop = () => {
      if (window.scrollY >= 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };
    window.addEventListener("scroll", showBackToTop);
    return () => window.removeEventListener("scroll", showBackToTop);
  }, []);
  return (
    <>
      <Hero />
      <Projects />
      <Divider />
      <Services />
      <Divider />
      <Footer />
      {backToTop && <BackToTop />}
    </>
  );
}
export default App;
