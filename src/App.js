import React from 'react';
import { Switch, Redirect,Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import ParticlesBg from "particles-bg";
import './App.css';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Certification from './pages/Certification/Certification';
import Project from './pages/Project/Project';
import Skills from './pages/Skills/Skills';
import GLOBAL from './/.//global'

const App = () => {
  const URL = GLOBAL.BASE_URL

  return (
    <div className="App">
     {/* <ParticlesBg color="#EBB4FF" 
     className="particles-bg-canvas-self"
      num={17}
        type="circle" bg={true} 
        />  */}
         
      <Header />
            <Switch>
                <Route exact path="/vipul_mashruwala1710" >
                  <Redirect to="/home"/>
                </Route>
                
                <Route   path="/home" component={Home}>
                  <Home />
                </Route>

                <Route exact path="/portfolio" component={Portfolio}>
                  <Portfolio />
                </Route>

                <Route exact path="/contact" component={Contact}>
                  <Contact base_url = {URL} />
                </Route>

                <Route path="/portfolio/experience" component={Experience}>
                  <Experience base_url = {URL} />
                </Route>

                <Route  path="/portfolio/education" component={Education}>
                  <Education base_url = {URL} />
                </Route>

                <Route  path="/portfolio/certifications" component={Certification}>
                  <Certification base_url = {URL} />
                </Route>

                <Route  path="/portfolio/project" component={Project}>
                  <Project base_url = {URL} />
                </Route>

                <Route  path="/portfolio/skills" component={Skills}>
                  <Skills base_url = {URL} />
                </Route>

                <Route  path="*" component={Home}>
                  <Home />

                </Route>
            </Switch>

    </div>
  );
}

export default App;
