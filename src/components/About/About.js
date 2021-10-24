import React from "react";
import "./About.css";
import "./Intro.css";
import left from "../../images/left.png";
import right from "../../images/right.png";

import ncu from "../../images/NCU Brand Logo-01 (1) white.png";
function About() {
	return (
		<div className='about__main' id='about'>
			<div className='about__heading'>
				<img src={left} alt='' />
				<h1>About Us</h1>
				<img src={right} alt='' />
			</div>
			<div class='about-ncu'>
				<div class='ncu-logo'>
					<img src={ncu} alt='ncu logo' />
				</div>
				<div class='ncu-text'>
					<p>
						Team Momentum of The NorthCap University is happy to share that we
						are organizing a technical Hackathon-Engage, based on Squid Game
						theme. The Hackathon is a part of our Annual Festival Momentum,
						which witnesses participation from Colleges and Universities from
						around the Country. This year we are inviting participation from our
						International partner Universities as well. Everything that we
						assume to be correct is not actually correct in the real sense.{" "}
						<br />
						<i>
							Sometimes the simplest and the easiest looking thing can be the
							most tricky one!
						</i>
					</p>
					<div className='about__details'>
						<div className='about__where'>
							<i class='fas fa-globe'></i>
							<div className=''>
								<h2>WHERE</h2>
								<h4>Virtual Event</h4>
							</div>
						</div>
						<div className='about__where'>
							<i class='far fa-calendar-alt'></i>
							<div className=''>
								<h2>WHEN</h2>
								<h4>28th-30th October 21</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
