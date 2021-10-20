import React from "react";
import Data from "./../shared/Data.const";
import "../styles/all-styles.css";

function Tracks() {
  const engageTracks = Data.find((x) => x.id === "engageTracks");
  return (
    <div>
      <div className="tracks">
        {engageTracks.tracks.map((x) => {
          return (
            <div className="track" key={x.trackName}>
              <div className="icon">
                <img src={x.icon} alt="" />
              </div>
              <div className="track-details">
                <h3 className="track-name">{x.trackName}</h3>
                <div className="underline"></div>
                <div className="track-description">{x.trackDescription}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tracks;
