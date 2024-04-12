import React, { useContext } from "react";
import { Songs } from "../Context";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Playing() {
  const { song, handleSetSong } = useContext(Songs);

  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPrevious = () => {
    handleSetSong(song.id - 1);
  };

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
}
