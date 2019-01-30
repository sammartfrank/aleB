import React, { Component } from 'react';
import Vermas from './Vermas.js';

var results = [
	{title:'food netwoork', subtitle: 'Campaña para el gobierno de la ciudad', imagenes: [], videos: []},
	{title:'trabajo 2', subtitle: 'Campaña del desierto', imagenes: [], videos: []},
	{title:'trabajo 3', subtitle: 'Campaña del oceano', imagenes: [], videos: []},
	{title:'trabajo 4', subtitle: 'Campaña del culo', imagenes: [], videos: []},
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