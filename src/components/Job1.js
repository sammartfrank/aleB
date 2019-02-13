import React, { Component } from 'react';
// x	 Media
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
	{title:'Road Safety', subtitle: 'Aim of campaign was to lower accident death ratio on Argentina\'s roads. We based on the insight. We covered both optimist and pesimist sides of car accidents. Mainly, you can stay alive by using belt or helmet, but also, talk about negligence in human behaviour in crashes.', imagenes: [img1,img2,img3,img4,img5], videos: [sv1,sv2]},
	{title:'Tentaciones Cookies', subtitle:'The brand wanted to launch a limited edition of already known Tentaciones with a new chocolate filling, so we created this "Yes, but NO" concept execution to make them more irresistible.', imagenes:[], videos:[]},
	{title:'Fiat', subtitle: '', imagenes: [img6,img7,img8,img9,img10],},
	{title:'Pim', subtitle: '', imagenes: [], videos: [v1,v2,v3,v4,v5]},
	{title:'', subtitle:'', imagenes:[], videos:[]},
	{title:'', subtitle:'', imagenes:[], videos:[]},
	{title:'Desarme', subtitle: '', imagenes: [img11,img12], videos: []},
	{title:'', subtitle:'', imagenes:[], videos:[]},
	{title:'', subtitle:'', imagenes:[], videos:[]},
	{title:'Suter', subtitle: '', imagenes: [], videos: [v6,v7,v8]},
	{title:'', subtitle:'', imagenes:[], videos:[]},
	{title:'', subtitle:'', imagenes:[], videos:[]},
	];

class JobTV extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="job">
					<Vermas results={results}/>
			</div>
		)	
	}
}

export default JobTV;