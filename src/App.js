import React, { Component } from 'react';
import './App.css';

import Head from './components/Head.js';
import Job1 from './components/Job1.js';
import Job2 from './components/Job2.js';
import Job3 from './components/Job3.js';
import Pref from './components/Pref.js';
import Pref2 from './components/Pref2.js';
import Footer from './components/Footer.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
          <Job1 />
        <Pref />
          <Job2 />
        <Pref2 />
          <Job3 />
        <Footer />    
      </div>
    );
  }
}

export default App;
