import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import AboutMe from '../AboutMePage/AboutMePage';
// import Projects from '../ProjectsPage/Projects';
import AllProjects from '../../AllProjectsPage/allProjects';
function App() {
  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path="/About-Me" element={<AboutMe />} />
        <Route path="/Projects" element={<AllProjects/>} />
      </Routes> 
     
    </>
  );
}

export default App;