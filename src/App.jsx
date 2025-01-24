import Navbar from "./Components/Navbar";
import Photo from "./Components/Photo";
import Particlebg from "./Components/Particle";
import About from "./Components/About";
import Project from "./Components/Projects"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <Photo />
      <Particlebg />
      <About/>
      <Project />
      <Testimonial />
      <Contact/>
      <Footer />
    </>
  );
}
