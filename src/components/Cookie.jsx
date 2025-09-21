import React from "react";

export default function Cookie({ type, label, image, onClick, size = 120 }) {
  return (
    <div
      onClick={() => onClick(type)}
      style={{
        margin: 25,
        cursor: "pointer",
        textAlign: "center",
        display: "inline-block",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={image}
        alt={label}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          boxShadow: "4px 4px 15px rgba(0,0,0,0.2)"
        }}
      />
      <div style={{ marginTop: 10, fontFamily: "'Quicksand', sans-serif", color: "#FF69B4", fontWeight: "bold", fontSize: 18 }}>
        {label}
      </div>
    </div>
  );
}
