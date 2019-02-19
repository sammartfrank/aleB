import React from 'react';
import VermasAngel from './VermasAngel.js';

// Angels Media
import LogoLADLC from './img/rrss/LADLC/Logo.png';
import CharactersLADLC from './img/rrss/LADLC/TurnAround.gif';
import OpeningLADLC from './img/rrss/LADLC/Opening.mp4';
import IGLADLC from './img/rrss/LADLC/IG.mov';
import YTLADLC from './img/rrss/LADLC/YT.mov';
import PremiereLADLC from './img/rrss/LADLC/Premiere.mp4';

import LADLC1 from './img/rrss/LADLC/Gallery/1-B2B.jpg';
import LADLC2 from './img/rrss/LADLC/Gallery/2-Cooking.jpg';
import LADLC3 from './img/rrss/LADLC/Gallery/3-Door.jpg';
import LADLC4 from './img/rrss/LADLC/Gallery/biscotti.jpg';
import LADLC5 from './img/rrss/LADLC/Gallery/lasagna.jpg';
import LADLC6 from './img/rrss/LADLC/Gallery/lomo.jpg';
import LADLC7 from './img/rrss/LADLC/Gallery/ladlc-1.jpg';
import LADLC8 from './img/rrss/LADLC/Gallery/ladlc-2.jpg';
import LADLC9 from './img/rrss/LADLC/Gallery/paella.jpg';
import LADLC10 from './img/rrss/LADLC/Gallery/rogel.jpg';
import LADLC11 from './img/rrss/LADLC/Gallery/tiramisu.jpg';
import LADLC12 from './img/rrss/LADLC/Gallery/waffles.jpg';
import LADLC13 from './img/rrss/LADLC/Gallery/cheesecake.jpg';


// Nietotest Media
import LogoNT from './img/rrss/NT/Logo.gif';
import CardsNT from './img/rrss/NT/Cards.gif';
import VideoNT from './img/rrss/NT/Nietotest.mp4';
import ScreenNT from './img/rrss/NT/ScreenRecord.mov';

// First Chapter Media
import VideoFC from './img/rrss/FC/FirstChapter.mp4';
import BoardFC from './img/rrss/FC/FirstChapter-Board.jpg';



var results = [
	{id:16, title:'KITCHEN ANGELS', subtitle: 'This project is a TV-show for Food Network channel. It involved every stage of the marketing spectrum. We started with a hand-drawn logo and design of characters.', parraf:"", imagenes: [LogoLADLC,CharactersLADLC], videos: []},
	{id:17, title:'', subtitle: 'Produced an opening to kick off with the brand concept and for maximum brand impact.', parraf:"", imagenes: [], videos: [OpeningLADLC]},
	{id:18, title:'', subtitle: 'Instagram and Facebook were programmed to feed the YouTube channel with subscribers. Media was synched with air premiere schedule. -- Visit Instagram profile --Visit YouTube channel', parraf:"", imagenes: [], videos: [YTLADLC,IGLADLC,PremiereLADLC]},
	{id:19, title:'', subtitle: 'Produced content for all media channels', parraf:"", imagenes: [LADLC1,LADLC2,LADLC3,LADLC4,LADLC5,LADLC6,LADLC7,LADLC8,LADLC9,LADLC10,LADLC11,LADLC12,LADLC13], videos: []},
	{id:20, title:'NIETOTEST',subtitle:'-Nieto- stands for grandchildren. This project consists of a website that contains a customizable and printable memotest.', parraf:"The app was a tool for families to stay close to their grandparents during early stages of Alzheimer’s disease.", imagenes: [LogoNT,CardsNT], videos: [VideoNT,ScreenNT]},
	{id:21, title:'FIRST CHAPTER', subtitle: 'This publishing house needed some kind of sales boost so we came up with First Chapter. Sampling in a category not yet used.', parraf:"", imagenes: [BoardFC], videos: [VideoFC]},
	];

function JobIntegratedContent() {
		return (
			<div className="job2">
					<VermasAngel results={results}/>		
			</div>
			)	
	}

export default JobIntegratedContent;