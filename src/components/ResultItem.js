import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultItem = ({title, subtitle, id, parraf, imagenes, videos}) => {
	return (
			<div  className="item">
				<div></div>
				<div className="text">
					<h3>{title}</h3>
					{subtitle.length !== 0 && <p>{subtitle}</p>}
					{parraf && <p>{parraf}</p>}
				</div>
				<div className="media">
					<div className='vidios'>
						{videos.length > 5 && <div id="carruvids">
							{<Carousel infiniteLoop showThumbs={false} interval={5000}  >
										{videos.map(src=> <video key={id} controls src={src} alt="video"></video>)}
							</Carousel>}
						</div>}
							{videos.length <= 5 && <div>
								{videos.map(src=> <video  key={src} className="colvids" src={src} alt="video" controls></video> )}
							</div>}
					</div>
					<div className="imags">
								{imagenes.length > 2 && <div>
								{	<Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={800}>
												{imagenes.map(src => <img  key={src} src={src} alt="Jobs Image"/>)}
									</Carousel>}
								</div>}
								{imagenes.length <=2 && <div>
								{ imagenes.map(src => <img className="imags"  key={src} src={src} alt="Jobs Image"/>)}
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


// Scroll Script first go 
// const smoothScroll = (elementId) => {
//     var MIN_PIXELS_PER_STEP = 16;
//     var MAX_SCROLL_STEPS = 30;
//     var target = document.getElementById(elementId);
//     var scrollContainer = target;
//     do {
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);
// 
//     var targetY = 0;
//     do {
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);
// 
//     var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
//                                  (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);
// 
//     var stepFunc = function() {
//         scrollContainer.scrollTop =
//             Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);
// 
//         if (scrollContainer.scrollTop >= targetY) {
//             return;
//         }
// 
//         window.requestAnimationFrame(stepFunc);
//     };
// 
//     window.requestAnimationFrame(stepFunc);
// }
