import React, { useRef, useEffect } from "react";
import SidebarActions from "./SidebarActions";

const VideoCard = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleScroll = () => {
      const rect = video.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.play();
      } else {
        video.pause();
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <SidebarActions />
    </div>
  );
};

export default VideoCard;
