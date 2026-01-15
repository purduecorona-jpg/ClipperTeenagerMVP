import React from "react";
import SidebarActions from "./SidebarActions";

const VideoCard = ({ src }) => {
  return (
    <div className="video-card">
      <video src={src} autoPlay loop muted playsInline />
      <SidebarActions />
    </div>
  );
};

export default VideoCard;
