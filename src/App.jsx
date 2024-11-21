import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import MainPage from './components/MainPage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex flex-col">
        {/* Navbar is rendered on all pages */}
        
        
        {/* Define the routes for each section */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
