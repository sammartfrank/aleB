import React from 'react'
import video from './img/vids/CONTACT.mp4';
import { Spring } from 'react-spring'	;

const Footer = () => {
	return (
							<div>
				<div className="" style={{position:'absolute', height:'100vh'}}>
					<div style={{background:'black'}}>
						<Spring 
								delay={3500}
								from={{ opacity:0, transform: 'translateY(0)',zIndex:'1045'  }}
								to={{ opacity:1, transform: 'translateY(-150px)', zIndex:'1'}}>
									{props => <div style={props} className="ctx">
											<h1>contAct</h1>
											<h3>Write</h3>
											<p>alebarredo@gmail.com</p>
											<h3>Call</h3>
											<p>54 11 1555771850</p>
									</div>}
						</Spring>
							<div style={{width: '100vw', height: '100vh',position: 'static', top: '0px', left:'0px', overflow: 'hidden', zIndex: '-1'}}>
		 					<video src={video} autoPlay muted loop style={{width:'100%', height:'100%', objectFit: 'fit'}}/>
							</div>
						</div>
					</div>
			</div>
		)
}

export default Footer;