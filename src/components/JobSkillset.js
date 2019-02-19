import React from 'react'
import VermasDev from './VermasDev.js';

// GameDev Media
import ElvisTurn from './img/indie/GameDev/ElvisTurn.mp4'; 
import TankTurn from './img/indie/GameDev/TankTurn.mp4'; 
import SkinnyTurn from './img/indie/GameDev/SkinnyTurn.mp4'; 
// Toys Media
import Toy1 from './img/indie/Toys/1.jpg'; 
import Toy2 from './img/indie/Toys/2.JPG'; 
import Toy3 from './img/indie/Toys/3.jpg'; 
import Toy4 from './img/indie/Toys/4.JPG'; 
import Toy5 from './img/indie/Toys/5.jpg';
import Toy6 from './img/indie/Toys/6.gif'; 

// Illustration Media
import I1 from './img/indie/Illustration/Gallery/buli.PNG';
import I2 from './img/indie/Illustration/Gallery/eli.PNG'; 
import I3 from './img/indie/Illustration/Gallery/horror.PNG'; 
import I4 from './img/indie/Illustration/Gallery/jim-1.PNG'; 
import I5 from './img/indie/Illustration/Gallery/jim-2.PNG'; 
import I6 from './img/indie/Illustration/Gallery/jimmy.PNG'; 
import I7 from './img/indie/Illustration/Gallery/kiss.PNG'; 
import I8 from './img/indie/Illustration/Gallery/napoleon.PNG'; 
import I9 from './img/indie/Illustration/Gallery/oldie.PNG'; 
import I10 from './img/indie/Illustration/Gallery/psycho.PNG'; 
import I11 from './img/indie/Illustration/Gallery/quesi.PNG';
import I12 from './img/indie/Illustration/Gallery/techno.PNG'; 
import I13 from './img/indie/Illustration/Gallery/walter.PNG'; 

import I14 from './img/indie/Illustration/office.gif'; 
import I15 from './img/indie/Illustration/misc-1.jpg'; 


var results = [
	{id:22, title:'GAME DEV', subtitle: 'I work with Unity3D and Blender to create characters, worlds and currently developing a game as an indie.', parraf:"", imagenes: [], videos: [ElvisTurn,TankTurn,SkinnyTurn]},
	{id:23, title:'TOYS', subtitle: 'Sometimes i switch to something different from a mouse and keyboard. That\'s when these come out.', parraf:"", imagenes: [Toy1,Toy2,Toy3,Toy4,Toy5,Toy6], videos: []},
	{id:24, title:'ILLUSTRATION', subtitle: 'Stranger things happen when i grab a pencil or an IPad', parraf:"", imagenes: [I1,I2,I3,I4,I5,I6,I7,I8,I9,I10,I11,I12,I13,I14,I15], videos: []},
];


function JobSkillset() {
		return (
			<div className="job3">
					<VermasDev results={results}/>
			</div>
		)
	};

export default JobSkillset;