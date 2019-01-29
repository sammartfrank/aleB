import React, { Component } from 'react';
import Head from './Head.js';
import Pref from './Pref.js';
import Pref2 from './Pref2.js';
import Job1 from './Job1.js';
import Job2 from './Job2.js';
import Job3 from './Job3.js';
import Footer from './Footer.js';
class Home extends Component {	

	componentDidMount() {
		
	}
	render() {
		return (
			<div className="">
				<Head/>
					<Job1/>
						<Pref />
					<Job2/>
						<Pref2/>
					<Job3/>
				<Footer />
			</div>
		);
	}
}
export default Home;
