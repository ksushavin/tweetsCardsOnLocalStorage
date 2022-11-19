import React from 'react';
import bgImg from "images/Phone.png";

export default function HomePage() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
    </div>
  )
}
