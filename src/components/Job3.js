import React from 'react'
import il1 from './img/il1.jpg';
import il2 from './img/il2.jpg';
import il3 from './img/il3.jpg';
import il4 from './img/il4.jpg';
import il5 from './img/il5.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Job3 = () => {
	return (
		<div className="job3">
				<h1>skillset</h1>
				<h3>mAny</h3>
					<div className="imags">
						<Carousel  autoPlay showThumbs={false} infiniteLoop interval={5000} transitionTime={800}>
								<img src={il1} alt="Ilustraciones"/>
								<img src={il2} alt="Ilustraciones"/>
								<img src={il3} alt="Ilustraciones"/>
								<img src={il4} alt="Ilustraciones"/>
								<img src={il5} alt="Ilustraciones"/>
							</Carousel>
						</div>
		</div>
		)
}

export default Job3;