import React, { useState, useEffect } from 'react';


function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
    const audio = new Audio("./audio.mp3");
    audio.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    const audio = new Audio(audioFile);
    audio.pause();
  };

  return (
    <div>
      <button onClick={handlePlay} disabled={isPlaying}>
        Play
      </button>
      <button onClick={handlePause} disabled={!isPlaying}>
        Pause
      </button>
    </div>
  );
}

export default AudioPlayer;