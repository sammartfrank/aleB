import React, { Component} from 'react'
import Vermas from './Vermas.js';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Ilus Media
import ilu1 from './img/ilus/il1.jpg'; 
import ilu2 from './img/ilus/il2.jpg'; 
import ilu3 from './img/ilus/il3.jpg'; 
import ilu4 from './img/ilus/il4.jpg'; 
import ilu5 from './img/ilus/il5.jpg'; 

var results = [
	{title:'ilustraciones', subtitle: 'Arte digital', imagenes: [ilu1,ilu2,ilu3,ilu4,ilu5], videos: []},
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
				<hr />
					<Vermas results={results}/>
			</div>
		)
	}
}

export default JobSkillset;