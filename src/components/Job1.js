import React, { Component } from 'react';
import Vermas from './Vermas.js';

var results = [
	{title:'road safety', subtitle: 'Campaña para el gobierno de la ciudad', imagenes: [], videos: []},
	{title:'trabajo 2', subtitle: 'Campaña del desierto', imagenes: [], videos: []},
	{title:'trabajo 3', subtitle: 'Campaña del oceano', imagenes: [], videos: []},
	{title:'trabajo 4', subtitle: 'Campaña del culo', imagenes: [], videos: []},
	];

class JobTV extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="job">
				<h1>tv&print</h1>
					<Vermas results={results}/>
			</div>
		)	
	}
}

export default JobTV;