import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Jumbotron />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
export default App;
