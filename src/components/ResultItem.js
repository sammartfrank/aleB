import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultItem = ({title, subtitle, id, imagenes, videos}) => {
	return (
			<div className="item">
				<h3>{title}</h3>
				{subtitle.length !== 0 && <p>{subtitle}</p>}
					<div className='vidios'>
						{videos.length >= 3 && <div className="carvids">
							{<Carousel infiniteLoop showThumbs={false} interval={5000}  >
										{videos.map(src=> <video key={id} controls src={src} alt="video"></video>)}
							</Carousel>}
						</div>}
							{videos.length <3 && <div>
								{videos.map(src=> <video  key={id} className="colvids" src={src} controls></video> )}
							</div>}
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aliquam quis, voluptas cupiditate dolorem soluta vero id iusto quae necessitatibus! Iure ratione beatae eos esse pariatur deleniti voluptatibus deserunt laborum.
							</p>
					</div>
					<div className="imags">
								{imagenes.length > 0 && <div>
								{	<Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={800}>
												{imagenes.map(src => <img  key={id} src={src} alt="Seguridad Vial"/>)}
									</Carousel>}
								</div>}
					</div>
			</div>
		)
}

ResultItem.defaultProps = {
	title: 'here goes a Titlte',
	subtitle: 'here goes a Subtitle',
	imagenes: [],
	videos: [],
}
ResultItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	imagenes: PropTypes.array.isRequired,
	videos: PropTypes.array.isRequired,
}
export default ResultItem;

