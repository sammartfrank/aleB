import React from 'react';
import ig from "./img/rs/IG-hover.png"
import yt from './img/rs/yt.png'
import wb from './img/rs/link.png'
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultItemIC = ({title, subtitle, id, parraf, imagenes, web, insta, yot, videos}) => {
	return (
			<div className="item">
				<div></div>
				<div className="text">
					<h3>{title}</h3>
					{subtitle.length !== 0 && <p>{subtitle}</p>}
					{parraf && <p>{parraf}</p>}
					<div className="rea">
					{insta.length != 0 && <div>
							<a href={insta} target="_blank">
								<img src={ig} style={{width:'2em'}} alt="Instagram"/>
							</a>
					</div>}
					{yot.length != 0 && <div>
							<a href={yot} target="_blank">
								<img src={yt} style={{width:'2em'}} alt="Yot"/>
							</a>
					</div>}
					{web.length != 0 && <div>
						<a href={web} target="_blank">
								<img src={wb} style={{width:'2em'}} alt="Website"/>
							</a>
					</div>}
					</div>
				</div>
				<div className="media">
					<div className="imags">
								{imagenes.length > 2 && <div>
								{	<Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={800}>
												{imagenes.map(src => <img  key={src} src={src} alt="Seguridad Vial"/>)}
									</Carousel>}
								</div>}
								{imagenes.length <=2 && <div>
								{ imagenes.map(src => <img className="imags"  key={src} src={src} alt="Seguridad Vial"/>)}
								</div>}
					</div>
					<div className='vidios'>
						{videos.length >= 5 && <div id="carruvids">
							{<Carousel infiniteLoop showThumbs={false} interval={5000}  >
										{videos.map(src=> <video key={id} controls src={src} alt="video"></video>)}
							</Carousel>}
						</div>}
							{videos.length <=3 && <div>
								{videos.map(src=> <video  key={src} className="colvids" src={src} alt="video" controls></video> )}
							</div>}
					</div>
				</div>
			</div>
		)
}

ResultItemIC.defaultProps = {
	title: 'here goes a Title',
	subtitle: 'here goes a Subtitle',
	parraf: "Paragraph",
	imagenes: [],
	videos: [],
	insta: [],
	yot: [],
	web: [],
}
ResultItemIC.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	parraf: PropTypes.string.isRequired,
	imagenes: PropTypes.array.isRequired,
	videos: PropTypes.array.isRequired,
	insta: PropTypes.array.isRequired,
	yot: PropTypes.array.isRequired,
	web: PropTypes.array.isRequired,
}
export default ResultItemIC;
