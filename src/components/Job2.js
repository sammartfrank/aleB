import React, { Component } from 'react';
import Vermas from './Vermas.js';

// Angels Media



var results = [
	{title:'food netwoork', subtitle: 'Angeles de lA cocinA', imagenes: [], videos: []},
	{title:'trabajo 2', subtitle: 'campaña del desierto', imagenes: [], videos: []},
	{title:'trabajo 3', subtitle: 'campaña del oceano', imagenes: [], videos: []},
	{title:'trabajo 4', subtitle: 'campaña del culo', imagenes: [], videos: []},
	];


class JobIntegratedContent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="job2">
					<h1>integrAted content</h1>
								<Vermas results={results}/>		
			</div>
			)	
	}
}

export default JobIntegratedContent;