import React, { Component } from 'react';
import Head from './Head.js';
import Pref from './Pref.js';
import Pref2 from './Pref2.js';
import JobTV from './Job1.js';
import JobIntegratedContent from './Job2.js';
import Job3 from './Job3.js';
import Footer from './Footer.js';

class Home extends Component {	
	render() {
		return (
			<div className="">
				<Head />
					<JobTV />
						<Pref />
					<JobIntegratedContent />
						<Pref2 />
					<Job3 />
				<Footer />
			</div>
		);
	}
}
export default Home;
