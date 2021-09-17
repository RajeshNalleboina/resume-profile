import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import Title from './components/Title'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Project'
import TechSkills from './components/SkillsSection'
import Recommendation from './components/Recommendation'
import "./App.css"
import "./components/styles.css"
import WorkExperience from './components/WorkExperience';
import ProfessionalSummary from './components/ProfessionalSummary';

function App() {
  return (
    <div className="App">
     <h1>Portfolio</h1>
     <NavBar/>
     <Title name="Bhimavarapu Sravya Pranati" lead="ReactJS Developer at TCS"/>
     <ProfessionalSummary />
     <WorkExperience />
     <Projects />
     <Recommendation />
     <TechSkills />
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
