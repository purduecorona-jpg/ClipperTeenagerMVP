import React from "react";

const SidebarActions = () => {
  return (
    <div style={{
      position: "absolute",
      right: "10px",
      bottom: "100px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      background: "rgba(0,0,0,0.3)",
      padding: "10px",
      borderRadius: "12px"
    }}>
      <img src="/icons/heart.svg" alt="like" style={{ width: "36px", cursor: "pointer" }} />
      <img src="/icons/comment.svg" alt="comment" style={{ width: "36px", cursor: "pointer" }} />
      <img src="/icons/share.svg" alt="share" style={{ width: "36px", cursor: "pointer" }} />
    </div>
  );
};

export default SidebarActions;
