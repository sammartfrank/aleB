import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultItem = ({title, subtitle, id, parraf, imagenes, videos}) => {
	return (
			<div className="item">
				<div></div>
				<div className="text">
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
								{videos.map(src=> <video  key={src} className="colvids" src={src} alt="video" controls></video> )}
							</div>}
					</div>
					<div className="imags">
								{imagenes.length >= 4 && <div>
								{	<Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={800}>
												{imagenes.map(src => <img  key={src} src={src} alt="Seguridad Vial"/>)}
									</Carousel>}
								</div>}
					</div>
				</div>
			</div>
		)
}

ResultItem.defaultProps = {
	title: 'here goes a Title',
	subtitle: 'here goes a Subtitle',
	parraf: "Paragraph",
	imagenes: [],
	videos: [],
}
ResultItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	parraf: PropTypes.string.isRequired,
	imagenes: PropTypes.array.isRequired,
	videos: PropTypes.array.isRequired,
}
export default ResultItem;

