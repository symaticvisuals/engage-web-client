import React from "react";
import "./Sponsors.css";
import left from "../../images/left.png";
import right from "../../images/right.png";
function Sponsors() {
	return (
		<div className='sponsors__main' id='sponsors'>
			<div className='about__heading'>
				<img src={left} alt='' />
				<h1>Sponsors</h1>
				<img src={right} alt='' />
			</div>
			<div className='sponsors__content'>
				<h2>To be Announced Soon !!!</h2>
				{/* <button className='sponsor__button'>
					<a
						href='https://docs.google.com/forms/d/e/1FAIpQLScHUklShPXavjGbFhRZe-AcF3h5TULrySGEY_QPxoOh1UXJ7A/viewform'
						target='_blank'
						rel='noopener noreferrer'
					>
						Sponsor Now
					</a>
				</button> */}
			</div>
		</div>
	);
}

export default Sponsors;
