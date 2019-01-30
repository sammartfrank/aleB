import React, { Component } from 'react';
import arrow from './img/arw.png';
import { Spring } from 'react-spring';

import video from './img/vids/mov2.mp4';

class Pref2 extends Component {

	render() {
		return (
			<div>
				<div className="container-fluid" style={{background:'rgba(0,0,0,0.7)', position:'absolute', height:'100vh'}}>
					<Spring 
							delay={2000}
							from={{ opacity:0, transform: 'translateY(0)',  }}
							to={{ opacity:1, transform: 'translateY(-150px)', zIndex:'3'}}>
								{props => <div style={props} className="preft">
								<p>Time at home never goes to waste. Adding knowledge to my skill-set is a constant that won’t stop. 3d modeling, game development, music production and illustration are passions that can turn useful at any given project.</p>
								</div>}
					</Spring>
				</div>
					<div style={{width: '100vw', height: '100vh',position: 'static', top: '0px', left:'0px', overflow: 'hidden', zIndex: '-1'}}>
 					<video src={video} autoPlay muted loop style={{width:'100%', height:'100%', objectFit: 'cover'}}/>
					</div>
			</div>
		);
	}
}

export default Pref2;