import React, { Component } from 'react';
// RoadSafet Media
import img1 from './img/graf/sv1.jpg';
import img2 from './img/graf/sv2.jpg';
import img3 from './img/graf/sv3.jpg';
import img4 from './img/graf/sv4.jpg';
import img5 from './img/graf/sv5.jpg';
import sv1 from './img/vids/svcasc.mp4';
import sv2 from './img/vids/svcin.mp4';
// fiat Media
import img6 from './img/grafica/amigos.jpg';
import img7 from './img/grafica/BOBBY.jpg';
import img8 from './img/grafica/chicas.jpg';
import img9 from './img/grafica/familia.jpg';
import img10 from './img/grafica/LISA.jpg';
//Desarme Media
import img11 from './img/DESARME/DESARME-01.jpg';
import img12 from './img/DESARME/DESARME-02.jpg';
//PIM Media
import v1 from './img/PIM/ALFAJOR.mp4';
import v2 from './img/PIM/PELOTA.mp4';
import v3 from './img/PIM/PELUCHE.mp4';
import v4 from './img/PIM/SUPER PANCHO.mp4';
import v5 from './img/PIM/TALLARINES.mp4';
// Suter Media
import v6 from './img/suter/SUTER - Casa Inteligente.mp4'
import v7 from './img/suter/SUTER AVi├ôN.mp4';
import v8 from './img/suter/SUTER DENTISTA.mp4';


import Vermas from './Vermas.js';

var results = [
	{title:'roAd sAfety', subtitle: 'cAmpañA pArA el gobierno de lA ciudAd', imagenes: [img1,img2,img3,img4,img5], videos: [sv1,sv2]},
	{title:'desArme', subtitle: 'cAmpAñA pArA el gobierno de la ciudAd', imagenes: [img11,img12], videos: []},
	{title:'fiAt', subtitle: 'cAmpAñA publicitAriA', imagenes: [img6,img7,img8,img9,img10], videos: []},
	{title:'pim', subtitle: 'campaña para pim', imagenes: [], videos: [v1,v2,v3,v4,v5]},
	{title:'suter', subtitle: 'campaña para suter', imagenes: [], videos: [v6,v7,v8]},
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