import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  const [count, setCount] = useState(0);

  // Create references to the Projects and Contact Me sections
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to the Projects section
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the Contact Me section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Pass scroll functions as props to Navbar */}
      <Navbar scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />
      
      <Home />
      
      {/* Projects section with the reference */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      {/* Contact Me section with the reference */}
      <div ref={contactRef}>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
