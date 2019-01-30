import React, { Component} from 'react'
import Vermas from './Vermas.js';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

var results = [
	{title:'ilustraciones', subtitle: 'Campaña para el gobierno de la ciudad', imagenes: [], videos: []},
	{title:'trabajo 2', subtitle: 'Campaña del desierto', imagenes: [], videos: []},
	{title:'trabajo 3', subtitle: 'Campaña del oceano', imagenes: [], videos: []},
	{title:'trabajo 4', subtitle: 'Campaña del culo', imagenes: [], videos: []},
	];


class JobSkillset extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="job3">
				<h1>skillset</h1>
					<Vermas results={results}/>
			</div>
		)
	}
}

export default JobSkillset;