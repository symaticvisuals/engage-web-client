import React from "react";
import "./Tracks.css";
function TrackCard({ track }) {
	return (
		<div className='track__main'>
			<div className='track__card'>
				<h1>{track.title}</h1>
				<p>{track.description}</p>
			</div>
		</div>
	);
}

export default TrackCard;
