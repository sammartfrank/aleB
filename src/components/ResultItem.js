import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultItem = ({title, subtitle, id, imagenes, videos}) => {
	return (
			<div>
				<h1>{title}</h1>
				<h3>{subtitle}</h3>
					<div className='vidios'>
						{videos.length > 0 && <div>
							{ <Carousel infiniteLoop showThumbs={false} interval={5000}>
									{videos.map(src=> <video controls src={src} alt="video"></video>)}
							</Carousel>}
						</div>}
					</div>
					<div className="imags">
								{imagenes.length > 0 && <div>
								{	<Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={800}>
												{imagenes.map(src => <img src={src} alt="Seguridad Vial"/>)}
									</Carousel>}
								</div>}
					</div>
			</div>
		)
}
ResultItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	imagenes: PropTypes.array.isRequired,
	videos: PropTypes.array.isRequired,
}
export default ResultItem;