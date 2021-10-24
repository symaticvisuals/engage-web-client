import React from "react";
import MentorCard from "../components/MentorCard";

import "../styles/mentors.css";
function Mentors() {
	return (
		<div>
			<div className='mentors'>
				<div className='mentor__heading'>
					<img src='/images/left.png' alt='' />
					<h1>Mentors</h1>
					<img src='/images/right.png' alt='' />
				</div>
			</div>
			<div className='mentor__cards'>
				<MentorCard />
			</div>
		</div>
	);
}

export default Mentors;
