// import logo from './logo.svg';
import Aboutme from './About Me/Aboutme';
import './App.css';
import Navbar from './Navbar/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from './Resume/Resume';
import Githubprojectlink from './Github project link/Githubprojectlink'
import Mainproject1 from './Main project -1/Mainproject1';
import Mainproject2 from './Main project-2/Mainproject2';
import Whyichangethecarrer from './Why I change the carrer/Whyichangethecarrer';


function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
       
          <Route path="/" element={<Navbar/>}/> 
          <Route path="/about me" element={<Aboutme/>}/>
          <Route path="/why i change the carrer" element={<Whyichangethecarrer/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="/githubprojectlink" element={<Githubprojectlink/>}/>
          <Route path="/main project 1" element={<Mainproject1/>}/>
          <Route path="/main project 2" element={<Mainproject2/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
