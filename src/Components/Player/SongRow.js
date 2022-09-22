import React from "react";
import "./SongRow.css";

function SongRow(track) {
  //   console.log("track: ", track.track.album.name);
  return (
    <div className="songRow">
      <img
        className="songRow__album"
        src={track.track.album.images[0].url}
        alt={track.name}
      ></img>
      <div className="songRow__info">
        <h4>{track.track.name}</h4>
        <p>
          {track.track.artists.map((artist) => artist.name).join(",")} -{" "}
          {track.track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
