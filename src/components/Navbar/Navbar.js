import React from "react";
import "./Navbar.css";
import brand from "../../images/engage.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
function Navbar() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div className=''>
			{!isTabletOrMobile ? (
				<div className='navbar__main'>
					<div className='navbar'>
						<div className='navbar__brandLogo'>
							<Link to='home' smooth={true} duration={500}>
								<img src={brand} alt='' />
							</Link>
						</div>
						<div className='navbar__userLinks'>
							<Link to='about' spy={true} smooth={true}>
								<h3>About Us</h3>
							</Link>
							<Link to='tracks' spy={true} smooth={true}>
								<h3>Tracks</h3>
							</Link>
							<Link to='sponsors' spy={true} smooth={true}>
								<h3>Sponsors</h3>
							</Link>
							<Link to='contact' spy={true} smooth={true}>
								<h3>FAQs</h3>
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default Navbar;
