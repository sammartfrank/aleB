import React, { Component } from 'react';
import Vermas from './Vermas.js';

// Angels Media
import LogoLADLC from './img/rrss/LADLC/Logo.png';
import CharactersLADLC from './img/rrss/LADLC/TurnAround.gif';
import OpeningLADLC from './img/rrss/LADLC/Opening.mp4';
import IGLADLC from './img/rrss/LADLC/IG.mov';
import YTLADLC from './img/rrss/LADLC/YT.mov';
import PremiereLADLC from './img/rrss/LADLC/Premiere.mp4';

import GalleryLADLC1 from './img/rrss/LADLC/Gallery/1-B2B.jpg';
import GalleryLADLC2 from './img/rrss/LADLC/Gallery/2-Cooking.jpg';
import GalleryLADLC3 from './img/rrss/LADLC/Gallery/3-Door.jpg';
import GalleryLADLC4 from './img/rrss/LADLC/Gallery/biscotti.jpg';
import GalleryLADLC5 from './img/rrss/LADLC/Gallery/lasagna.jpg';
import GalleryLADLC6 from './img/rrss/LADLC/Gallery/lomo.jpg';
import GalleryLADLC7 from './img/rrss/LADLC/Gallery/ladlc-1.jpg';
import GalleryLADLC8 from './img/rrss/LADLC/Gallery/ladlc-2.jpg';
import GalleryLADLC9 from './img/rrss/LADLC/Gallery/paella.jpg';
import GalleryLADLC10 from './img/rrss/LADLC/Gallery/rogel.jpg';
import GalleryLADLC11 from './img/rrss/LADLC/Gallery/tiramisu.jpg';
import GalleryLADLC12 from './img/rrss/LADLC/Gallery/waffles.jpg';
import GalleryLADLC13 from './img/rrss/LADLC/Gallery/cheesecake.jpg';


// Nietotest Media
import LogoNT from './img/rrss/NT/Logo.gif';
import CardsNT from './img/rrss/NT/Cards.gif';
import VideoNT from './img/rrss/NT/Nietotest.mp4';
import ScreenNT from './img/rrss/NT/ScreenRecord.mov';

// First Chapter Media
import VideoFC from './img/rrss/FC/FirstChapter.mp4';
import BoardFC from './img/rrss/FC/FirstChapter-Board.jpg';



var results = [
	{title:'KITCHEN ANGELS', subtitle: 'This project started with a naming that would keep cooking close to people, we drove that into a hand-drawn logo.', parraf:"", imagenes: [LogoLADLC,CharactersLADLC], videos: [OpeningLADLC,YTLADLC,IGLADLC,PremiereLADLC]},
	{title:'NIETOTEST',subtitle:'-Nieto- stands for grandchildren. This project consists of a website that contains a customizable and printable memotest.', parraf:"The aim was to give tools to families and help them share with their grandparents, even if they are going through Alzheimer’s disease. ", imagenes: [LogoNT,CardsNT], videos: [VideoNT,ScreenNT]},
	{title:'FIRST CHAPTER', subtitle: 'This publishing house needed some kind of sales boost so we came up with First Chapter. Sampling in a category not yet used.', parraf:"", imagenes: [BoardFC], videos: [VideoFC]},
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