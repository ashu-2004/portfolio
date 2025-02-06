import { useEffect } from "react";
import Contact from "./componetns/Contact";
import Education from "./componetns/Education";
import Experience from "./componetns/Experience";
import Home from "./componetns/Home";
import Projects from "./componetns/Projects";
import Technologies from "./componetns/Technologies";
import Certificates from "./componetns/Certificates";

function App() {
  useEffect(() => {
    const handleAnchorScroll = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = 80; 

        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth", 
          });
        }
      }
    };
    document.addEventListener("click", handleAnchorScroll);
    return () => {
      document.removeEventListener("click", handleAnchorScroll);
    };
  }, []);

  return (
    <div>
      <Home id="Home"></Home>
      <Technologies id="Technologies"></Technologies>
      <Projects id="Projects"></Projects>
      <Experience id="Experience"></Experience>
      <Education id="Education"></Education>
      <Certificates id="Certificates"></Certificates>
      <Contact id="Contacts"></Contact>
    </div>
  );
}

export default App;
