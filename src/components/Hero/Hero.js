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
			<button
				data-tf-popup='D9h2kyNP'
				data-tf-auto-close='3000'
				className='hero__register'
			>
				Register Now
			</button>
		</div>
	);
}

export default Hero;
