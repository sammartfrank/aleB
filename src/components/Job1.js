import React from 'react'
import sv1 from './img/sv1.jpg';
import sv2 from './img/sv2.jpg';
import sv3 from './img/sv3.jpg';
import sv4 from './img/sv4.jpg';
import sv5 from './img/sv5.jpg';
import svcin from './img/svcin.mp4';
import svcasc from './img/svcasc.mp4';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Job1 = (title, subtitle, imgs ) => {
	return (
		<div className="job">
				<h1>tv&print</h1>
				{/* Nota: Tv print bajarlo, y agrandorlo 30%; */}
				<h3>roAd sAfety</h3>
					{/* //videos */}
					<div className='vidios'>
						<video controls src={svcin}>#1</video>
						<video controls src={svcasc}>#2</video>
					</div>
					{/* grilla */}
								<div className="imags">
							<Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} transitionTime={800}>
									<img src={sv1} alt="Seguridad Vial"/>	
									<img src={sv2} alt="Seguridad Vial"/>
									<img src={sv3} alt="Seguridad Vial"/>
									<img src={sv4} alt="Seguridad Vial"/>
									<img src={sv5} alt="Seguridad Vial"/>
							</Carousel>
									</div>
					</div>
		)
}

export default Job1;