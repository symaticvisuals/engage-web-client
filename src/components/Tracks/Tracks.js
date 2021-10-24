import React from "react";
import { tracks } from "../../data";
import TrackCard from "./TrackCard";
import left from "../../images/left.png";
import right from "../../images/right.png";
import "./Tracks.css";
function Tracks() {
	return (
		<div className='container__tracks' id='tracks'>
			<div className='tracks'>
				<div className='about__heading'>
					<img src={left} alt='' />
					<h1>Tracks</h1>
					<img src={right} alt='' />
				</div>
			</div>
			<div className='tracks__cards'>
				{tracks.map((track, i) => {
					return <TrackCard key={i} track={track} />;
				})}
			</div>
		</div>
	);
}

export default Tracks;
