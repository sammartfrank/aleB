import React, { Component } from 'react';
import Vermas from './Vermas.js';

// Angels Media



var results = [
	{title:'food netwoork', subtitle: '', imagenes: [], videos: []},
	{title:'trabajo 2',subtitle:'', imagenes: [], videos: []},
	{title:'trabajo 3', subtitle: '', imagenes: [], videos: []},
	{title:'trabajo 4', subtitle: '', imagenes: [], videos: []},
	];


class JobIntegratedContent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="job2">
								<Vermas results={results}/>		
			</div>
			)	
	}
}

export default JobIntegratedContent;