import React from "react";
import "./Footer.css";
import momentum from "../../images/unnamed.png";
import ncu from "../../images/NCU Brand Logo-01 (1) white.png";
function Footer() {
	return (
		<div className='footer__main'>
			<div className='left__logo'>
				<img src={momentum} alt='' />
			</div>
			<div className='copyright'>
				<h3>© 2021 Engage Hackathon </h3>
			</div>
			<div className='right__logo'>
				<img src={ncu} alt='' />
			</div>
		</div>
	);
}

export default Footer;
