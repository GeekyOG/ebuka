import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AudioPlayer = ({ img, tracks }: { img: string; tracks: any[] }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | any>(null);
  const progressRef = useRef<any>(null);
  const [currentTrack, setCurrentTrack] = useState(0);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      progressRef.current.value = (audio.currentTime / audio.duration) * 100;
    };

    audio?.addEventListener("timeupdate", updateTime);
    audio?.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    return () => {
      audio?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="relative flex flex-col items-center p-6 rounded-lg shadow-lg lg:w-[400px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm filter brightness-50"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Content Over Background */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Cover Image */}
        <div className="mb-4">
          <img src={img} alt="Album Cover" className="rounded-lg w-32 h-32" />
        </div>

        {/* Song Information */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-white">
            {tracks[currentTrack]?.name}
          </h3>
          <p className="text-gray-400">Ebuka</p>
        </div>

        {/* Audio Player */}
        <audio ref={audioRef} src="your-audio-file.mp3" preload="metadata" />

        {/* Controls */}
        <div className="flex justify-between items-center w-full mb-4">
          <button
            className="text-white bg-transparent"
            // onClick={() => (audioRef.current.currentTime - 5)}
            onClick={() => {
              if (currentTrack != 0) {
                setCurrentTrack(currentTrack - 1);
              }
            }}
          >
            ⏮
          </button>

          <button
            className="text-white text-2xl bg-transparent"
            onClick={togglePlayPause}
          >
            <Link
              to={tracks[currentTrack]?.external_urls.spotify}
              target="_blank"
            >
              {" "}
              {isPlaying ? "⏸" : "▶️"}
            </Link>
          </button>

          <button
            className="text-white bg-transparent"
            // onClick={() => (audioRef.current.currentTime += 5)}
            onClick={() => {
              if (currentTrack !== tracks?.length - 1)
                setCurrentTrack(currentTrack + 1);
            }}
          >
            ⏭
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center w-full">
          <span className="text-white text-sm">{formatTime(currentTime)}</span>
          <input
            type="range"
            ref={progressRef}
            className="mx-2 w-full"
            onChange={handleSeek}
          />
          <span className="text-white text-sm">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
