import React from 'react';
import VermasAngel from './VermasAngel.js';

// Angels Media
import LogoLADLC from './img/rrss/LADLC/Logo.png';
import CharactersLADLC from './img/rrss/LADLC/TurnAround.gif';
import OpeningLADLC from './img/rrss/LADLC/Opening.mp4';
import IGLADLC from './img/rrss/LADLC/IG.mp4';
import YTLADLC from './img/rrss/LADLC/YT.mp4';

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

// First Chapter Media
import VideoFC from './img/rrss/FC/FirstChapter.mp4';


var results = [
	{id:16, title:'KITCHEN ANGELS', subtitle: 'This project is a TV-show for Food Network channel. Responsible for production, selling and direction of the project. Originally a pilot that became acquired by Scripps Networks Interactive to air on Food Network’s roster. It involves every stage of the marketing spectrum. We started with a hand-drawn logo and character design.', parraf:"", imagenes: [LogoLADLC,CharactersLADLC], videos: []},
	{id:16, title:'', subtitle: 'Created a show opening to kick off with the brand’s concept and achieve maximum branding impact.', parraf:"", imagenes: [], videos: [OpeningLADLC]},
	{id:18, title:'', subtitle: 'Social media plays a big role in this project as the content has a modular short-form format, making it able to build and grow a subscriber community in YouTube, Instagram and Facebook channels with 100% organic publishing. Cross-publishing method was used to connect all three with talent profiles.', insta:['https://www.instagram.com/losangelesdelacocina'], yot:['https://www.youtube.com/channel/UCtbAtJgZhlaJ8eGqeEARJpQ/featured'],fabook:['https://www.facebook.com/losangelesdelacocina/'], parraf:"", imagenes: [], videos: [YTLADLC,IGLADLC]},
	{id:19, title:'', subtitle: 'Additional content was created during the process for scheduled social media publishing and press releases.', parraf:"", imagenes: [LADLC1,LADLC2,LADLC3,LADLC4,LADLC5,LADLC6,LADLC7,LADLC8,LADLC9,LADLC10,LADLC11,LADLC12,LADLC13], videos: []},
	{id:20, title:'NIETOTEST',subtitle:'-Nieto- stands for grandchildren. This project consists of a website that contains a customizable and printable memotest to help families stay close to their grandparents during early stages of Alzheimer’s disease. Gamifying a global problem, NIETOTEST helps grandparents and children all over the world, everyday.', parraf:"", web:['http://nietotest.com/'], imagenes: [LogoNT,CardsNT], videos: [VideoNT]},
	{id:21, title:'FIRST CHAPTER', subtitle: 'This publishing house needed a sales boosting solution. We came up with First Chapter. Sampling in a category not yet used: books.', parraf:"", imagenes: [], videos: [VideoFC]},
	];

function JobIntegratedContent() {
		return (
			<div className="job2">
					<VermasAngel results={results}/>		
			</div>
			)	
	}

export default JobIntegratedContent;