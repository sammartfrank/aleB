import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultItemDev = ({title, subtitle, id, parraf, imagenes, gallery, videos}) => {
	return (
			<div className="item" style={{paddingTop:'2.5em'}}>
				<div></div>
				<div className="text" style={{marginBottom:'1em'}}>
					<h3>{title}</h3>
					{subtitle.length !== 0 && <p>{subtitle}</p>}
					{parraf && <p>{parraf}</p>}
				</div>
				<div className="media">
					<div className='vidios'>
						{videos.length >= 5 && <div id="carruvids">
							{<Carousel infiniteLoop showThumbs={false} interval={5000}  >
										{videos.map(src=> <video key={id} controls src={src} alt="video"></video>)}
							</Carousel>}
						</div>}
							{videos.length <=3 && <div>
								{videos.map(src=> <video autoPlay loop  key={src} className="colvids" src={src} alt="video" controls></video> )}
							</div>}
					</div>
					<div className="imags">
								{imagenes && <div>
								{ imagenes.map(src => <img className="imags"  key={src} src={src} alt="Seguridad Vial"/>)}
								</div>}
								{gallery && <div>
								{	<Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={800}>
												{gallery.map(src => <img  key={src} src={src} alt="Seguridad Vial"/>)}
									</Carousel>}
								</div>}
					</div>
				</div>
			</div>
		)
}

ResultItemDev.defaultProps = {
	title: 'here goes a Title',
	subtitle: 'here goes a Subtitle',
	parraf: "Paragraph",
	imagenes: [],
	videos: [],
	gallery: [],
}
ResultItemDev.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	parraf: PropTypes.string.isRequired,
	imagenes: PropTypes.array.isRequired,
	videos: PropTypes.array.isRequired,
	gallery: PropTypes.array.isRequired,
}
export default ResultItemDev;

