import React from 'react'
import video from './img/CONTACT.mp4';
import { Spring } from 'react-spring'	;

const Footer = () => {
	return (
			<div>
				<div style={{position:'absolute', height:'100vh'}}>
					<div style={{background:'black'}}>
						<Spring 
								delay={3500}
								from={{ opacity:0, transform: 'translateY(0)',zIndex:'1045'  }}
								to={{ opacity:1, transform: 'translateY(-150px)', zIndex:'1'}}>
									{props => <div style={props} className="footer">
											<h3>Write</h3>
											<p>ale.barredo@gmail.com</p>
											<h3>Call</h3>
											<p>54 9 11 55771850</p>
											<div className="social">
												<h3>Stick Arround</h3>
												<ul>
													<li>
														<a href=""><img src="" alt=""/>Insta</a>
														<a href=""><img src="" alt=""/>Face</a>
														<a href=""><img src="" alt=""/>Behance</a>
													</li>
												</ul>
											</div>
									</div>}
						</Spring>
							<div style={{width: '100vw', height: '100vh',position: 'static', top: '10px', left:'0px', overflow: 'hidden', zIndex: '-1'}}>
		 					<video src={video} autoPlay muted loop style={{width:'20%', height:'20%', objectFit: 'fit', paddingTop:'3em'}}/>
							</div>
						</div>
					</div>
			</div>
		)
}

export default Footer;