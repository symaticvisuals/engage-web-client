import React from "react";

import brand from "../../images/engage.png";
import "./Hero.css";
function Hero() {
	return (
		<div className='hero__main'>
			<div className='hero__image'>
				<img src={brand} alt='' />
			</div>
			<div className='hero__content'>
				<h2>Hack. Engage. Build.</h2>
			</div>
			<a href='https://www.hackathon.io/engage8'>
				<button className='hero__register'>Submit Your Project</button>
			</a>
		</div>
	);
}

export default Hero;
