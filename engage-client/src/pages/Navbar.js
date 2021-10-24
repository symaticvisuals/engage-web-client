import React from "react";
import "../styles/navbar.css";
function Navbar() {
	return (
		<div className='nav__Main'>
			<div className='navbar'>
				<div className='navbar__logo'>
					<img src='images/engage.png' alt='' />
				</div>
				<div className='navbar__userLinks'>
					<h5>About</h5>
					<h5>Tracks</h5>
					<h5>Sponsors</h5>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
