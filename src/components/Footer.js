import React from 'react'
import video from './img/CONTACT.mp4';
import fb1 from './img/rs/2-FB.png'
import ig1 from './img/rs/3-IG.png'
import tw1 from './img/rs/1-TW.png'
import { Spring } from 'react-spring'	;

const Footer = () => {
	return (
			<div className="contact">
				<video src={video} autoPlay muted loop style={{width:'8em', height:'8em', marginTop:'5em', marginBottom:'0em'}}/>
				<div className="info">
					<h3>Write</h3>
					<a href="mailto:alebarredo@gmail.com"><p style={{fontFamily: 'Kameron'}}>ale.barredo@gmail.com</p></a>
					<br />
					<h3>Call</h3>
					<p>+54 9 11 55771850</p>	
					<br />
					<h3 style={{marginTop:'.5em'}}>Stick Around</h3>
					<ul>
						<li>
							<a href="https://www.instagram.com/ale.barredo/?hl=es-la" rel="noopener noreferrer" target="_blank"><img src={ig1} id="ig" alt="Instagram"/></a>
							<a href="https://www.facebook.com/ale3arredo" rel="noopener noreferrer" target="_blank"><img src={fb1} id="fb" alt="Facebook"/></a>
							<a href="https://twitter.com/dalemonodalex" rel="noopener noreferrer" target="_blank"><img src={tw1} id="tw" alt="twitter"/></a>
						</li>
					</ul>	
				</div>
			</div>
	)
}

export default Footer;