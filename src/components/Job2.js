import React from 'react'
import video from './img/side1.MOV';
import video2 from './img/side2.mov';
import ang from './img/ladc.mp4';


const Job2 = (title, subtitle, imgs ) => {
	return (
		<div className="job2">
				<h1>integrAted content</h1>
				{/* Nota: Tv print bajarlo, y agrandorlo 30%; */}
				<h3>food network</h3>
				{/* //videos */}
				<div className='vidios'>
							<video autoPlay loop muted src={video}></video>
							<br/>
							<video autoPlay muted loop src={video2}></video>
					</div>
		</div>
		)
}

export default Job2;