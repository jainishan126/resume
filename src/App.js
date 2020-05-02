import React, { Component } from 'react';
import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials"
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import resumeData from "./components/resume/resumeData";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
  
}

export default App;
