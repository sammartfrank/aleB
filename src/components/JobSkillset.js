import React from 'react'
import VermasDev from './VermasDev.js';

// GameDev Media
import Hotel from './img/indie/GameDev/Hotel.gif';
import ElvisTurn from './img/indie/GameDev/ElvisTurn.mp4'; 
import TankTurn from './img/indie/GameDev/TankTurn.mp4'; 
import SkinnyTurn from './img/indie/GameDev/SkinnyTurn.mp4';
import Transam from './img/indie/GameDev/Transam.mp4';
import GRAFF from './img/indie/GameDev/GRAFF.mp4';
import Betty from './img/indie/GameDev/Betty.mp4';



// Toys Media
import Pill1 from './img/indie/Toys/pill-1.jpg'; 
import Pill2 from './img/indie/Toys/pill-2.JPG'; 
import Pill3 from './img/indie/Toys/pill-3.jpg'; 
import Pill4 from './img/indie/Toys/pill-4.JPG'; 
import Yoyo from './img/indie/Toys/yoyo.jpg';
import YuckFou from './img/indie/Toys/yuckfou.jpg';
import Faulty from './img/indie/Toys/faulty.jpg'; 
import X32 from './img/indie/Toys/x32.jpg';
import LittleOne from './img/indie/Toys/LittleOne.gif'; 

// Illustration Media
import I1 from './img/indie/Illustration/Gallery/buli.PNG';
import I2 from './img/indie/Illustration/Gallery/eli.PNG'; 
import I3 from './img/indie/Illustration/Gallery/horror.PNG'; 
import I4 from './img/indie/Illustration/Gallery/jim-1.PNG'; 
import I5 from './img/indie/Illustration/Gallery/jim-2.PNG'; 
import I6 from './img/indie/Illustration/Gallery/frank.gif';
import I7 from './img/indie/Illustration/Gallery/jimmy.PNG'; 
import I8 from './img/indie/Illustration/Gallery/kiss.PNG'; 
import I9 from './img/indie/Illustration/Gallery/napoleon.PNG'; 
import I11 from './img/indie/Illustration/Gallery/psycho.PNG'; 
import I12 from './img/indie/Illustration/Gallery/quesi.PNG';
import I13 from './img/indie/Illustration/Gallery/techno.PNG'; 
import I14 from './img/indie/Illustration/Gallery/walter.PNG'; 

import I15 from './img/indie/Illustration/misc-1.jpg'; 
import I17 from './img/indie/Illustration/baitaly.jpg';
import I16 from './img/indie/Illustration/office.gif'; 



var results = [
	{id:22, title:'GAME DEV', subtitle: 'I work with Unity3D and Blender to create characters, worlds and currently developing a game as an indie.', parraf:"", imagenes: [Hotel], videos: [ElvisTurn,TankTurn,SkinnyTurn,Transam,GRAFF,Betty]},
	{id:23, title:'TOYS', subtitle: 'Sometimes i switch to something different from a mouse and keyboard. That\'s when these come out.', parraf:"", gallery:[Yoyo,YuckFou,Faulty,X32,LittleOne], imagenes: [Pill1,Pill2,Pill3,Pill4], videos: []},
	{id:24, title:'ILLUSTRATION', subtitle: 'Stranger things happen when i grab a pencil or an IPad', parraf:"", imagenes: [I1,I2,I3,I4,I5,I6,I7,I8,I9,I11,I12,I13,I14,I15,I16,I17], videos: []},
];


function JobSkillset() {
		return (
			<div className="job3">
					<VermasDev results={results}/>
			</div>
		)
	};

export default JobSkillset;