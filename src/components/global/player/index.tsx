"use client";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
// import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";
import Player from "video.js/dist/types/player";
import { VideoJsPlayerOptions } from "./video-options";
interface VideoPlayerProps {
  options: VideoJsPlayerOptions;
}

const initialOptions: VideoJsPlayerOptions = {
  width: 640,
  height: 320,
  techOrder: ["html5"],
  autoplay: false,
  controls: true,
  html5: {
    nativeAudioTracks: false,
    nativeVideoTracks: false,
    vhs: {
      overrideNative: true,
    },
  },
  plugins: {
    // httpSourceSelector: {
    //   default: "auto",
    // },
  },
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  useEffect(() => {
    const initializePlugins = async () => {
      // await import("videojs-contrib-quality-levels");
      // await import("videojs-http-source-selector");
      // await import("videojs-vtt-thumbnails");
      // await import("videojs-overlay");
      // const silvermine = await import("@silvermine/videojs-quality-selector");
      // silvermine.default(videojs); // Register plugin for Silvermine
    };

    initializePlugins();
  }, []);
  useEffect(() => {
    if (!videoRef.current) return;

    // Khởi tạo Video.js player
    const player = videojs(
      videoRef.current,
      {
        ...initialOptions,
        ...options,
      },
      function onPlayerReady() {
        console.log(player);
        // if (this.httpSourceSelector) {
        //   this.httpSourceSelector({ default: "auto" });
        // }
      }
    );

    // Kích hoạt các plugin
    // if (player.qualityLevels) player.qualityLevels();
    // if (player.httpSourceSelector)
    //   player.httpSourceSelector({ default: "auto" });

    playerRef.current = player;

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
      />
    </div>
  );
};

export default VideoPlayer;
