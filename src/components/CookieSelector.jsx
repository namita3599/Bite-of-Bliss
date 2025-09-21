import React from "react";
import Cookie from "./Cookie";
import cookieImg from "../assets/cookie.svg"; // single cookie image

export default function CookieSelector({ onSelect }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: 50 }}>
      <Cookie type="quotes" label="Quote" image={cookieImg} onClick={onSelect} size={180} />
      <Cookie type="advice" label="Advice" image={cookieImg} onClick={onSelect} size={180} />
      <Cookie type="reality" label="Reality" image={cookieImg} onClick={onSelect} size={180} />
    </div>
  );
}
