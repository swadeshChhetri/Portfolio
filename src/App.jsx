import { useEffect, useState } from "react";
import AboutSection from "./components/about/aboutSection";
import ContactSection from "./components/contect/contactSection";
import HeaderSection from "./components/header/headerSection";
import HomeSection from "./components/home/homeSection";
import ProjectSection from "./components/work/WorkSection";
import ExpertiseSection from "./components/expertise/expertiseSection";
import Certification from "./components/certificate/certificateSection";
import Footer from "./components/footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
const [isDaylight, setIsDaylight] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  const toggleTheme = () => { 
    setIsDaylight(!isDaylight);
   };

  return (
    <div className={isDaylight ? 'bg-light text-dark' : 'bg-dark'} style={{ minHeight: '100vh'}}>
      <HeaderSection toggleTheme = {toggleTheme} isDaylight = {isDaylight} />
      <HomeSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectSection />
      <Certification />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
