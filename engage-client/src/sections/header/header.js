import React from "react";
import Data from "./../../shared/Data.const";
import "../../styles/all-styles.css";
const Header = () => {
	const landing = Data.find((x) => x.id === "landing");
	return (
		<header>
			<div>
				<div className='logo'>
					<img src='images/engage.png' alt='' />
				</div>
				<div className='slogan'>
					<h3>{landing.slogan}</h3>
				</div>

				<button
					data-tf-popup='D9h2kyNP'
					data-tf-auto-close='3000'
					className='register'
				>
					Register Now
				</button>
			</div>
		</header>
	);
};

export default Header;
