import React from 'react';
import { Spring } from 'react-spring';

import video from './img/indie/BG.mp4';

function Pref2() {
		return (
			<div>
				<div className="container-fluid" style={{background:'rgba(0,0,0,0.7)', position:'absolute', height:'100vh'}}>
					<Spring 
							delay={2000}
							from={{ opacity:0, transform: 'translateY(0)',  }}
							to={{ opacity:1, transform: 'translateY(-150px)', zIndex:'3'}}>
								{props => <div style={props} className="preft">
								<p>Learning is a constant that turns useful at every project. </p>
								</div>}
					</Spring>
				</div>
					<div style={{width: '100vw', height: '100vh',position: 'static', top: '0px', left:'0px', overflow: 'hidden', zIndex: '-1'}}>
 					<video src={video} autoPlay muted loop style={{width:'100%', height:'100%', objectFit: 'cover'}}/>
					</div>
			</div>
		);
	}

export default Pref2;