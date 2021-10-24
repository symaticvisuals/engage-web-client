import React from "react";
import "../styles/tracks.css";
function TracksCard({ track }) {
	return (
		<div className='track__main'>
			<div className='track__card'>
				<h1>{track.title}</h1>
				<p>{track.description}</p>
			</div>
		</div>
	);
}

export default TracksCard;
