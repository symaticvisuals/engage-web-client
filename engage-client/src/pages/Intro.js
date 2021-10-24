import React from "react";
import Data from "../shared/Data.const";
import "../styles/all-styles.css";

function Intro() {
	const engageTracks = Data.find((x) => x.id === "engageTracks");
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div className='intro'>
				{engageTracks.tracks.map((x) => {
					return (
						<div className='intro__title' key={x.trackName}>
							<div className='icon'>
								<img src={x.icon} alt='' />
							</div>
							<div className='intro-details'>
								<h3 className='intro-name'>{x.trackName}</h3>
								<div className='underline'></div>
								<div className='intro-description'>{x.trackDescription}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Intro;
