import React, { Component } from 'react';
import './App.css';

import Head from './components/Head.js';
import Glow from './components/Glow.js';
import JobTV from './components/JobTV.js';
import JobIntegratedContent from './components/JobIntegratedContent.js';
import JobSkillset from './components/JobSkillset.js';
import Pref from './components/Pref.js';
import Pref2 from './components/Pref2.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Glow />
        <JobTV />
        <Pref />
        <JobIntegratedContent />
        <Pref2 />
        <JobSkillset />
        <Footer />    
      </div>
    );
  }
}

export default App;
