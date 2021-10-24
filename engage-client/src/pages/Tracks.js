import React from "react";
import TracksCard from "../components/TracksCard";
import { tracks } from "../shared/data";
import "../styles/tracks.css";
function Tracks() {
	return (
		<div className='container__tracks'>
			<div className='tracks'>
				<div className='tracks__heading'>
					<img src='/images/left.png' alt='' />
					<h1>Tracks</h1>
					<img src='/images/right.png' alt='' />
				</div>
			</div>
			<div className='tracks__cards'>
				{tracks.map((track, i) => {
					return <TracksCard key={i} track={track} />;
				})}
			</div>
		</div>
	);
}

export default Tracks;
