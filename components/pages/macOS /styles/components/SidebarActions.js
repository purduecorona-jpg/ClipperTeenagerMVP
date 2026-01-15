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
      color: "white",
      fontSize: "24px"
    }}>
      <button>❤️</button>
      <button>💬</button>
      <button>🔗</button>
    </div>
  );
};

export default SidebarActions;
