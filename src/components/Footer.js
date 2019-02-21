import React from 'react'
import video from './img/CONTACT.mp4';
import fb1 from './img/rs/FB.png'
import fb2 from './img/rs/FB-hover.png'
import ig1 from './img/rs/IG.png'
import ig2 from './img/rs/IG-hover.png'
import tw1 from './img/rs/TW.png'
import tw2 from './img/rs/TW-hover.png'
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
											<a href=""><p>ale.barredo@gmail.com</p></a>
											<h3>Call</h3>
											<p>+54 9 11 55771850</p>
											<div className="social">
												<h3>Stick Around</h3>
												<ul>
													<li>
														<a href="https://www.instagram.com/ale.barredo/?hl=es-la" target="_blank"><img src={ig1} alt="Instagram"/></a>
														<a href="https://www.facebook.com/ale3arredo"  target="_blank"><img src={fb1} alt="Facebook"/></a>
														<a href="https://twitter.com/dalemonodalex"  target="_blank"><img src={tw1} alt="twitter"/></a>
													</li>
												</ul>
											</div>
									</div>}
						</Spring>
							<div style={{width: '100vw', height: '100vh',position: 'static', top: '10px', left:'0px', overflow: 'hidden', zIndex: '-1'}}>
		 					<video src={video} autoPlay muted loop style={{width:'18%', height:'18%', objectFit: 'fit', marginTop:'6em'}}/>
							</div>
						</div>
					</div>
			</div>
		)
}

export default Footer;