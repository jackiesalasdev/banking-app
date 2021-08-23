import React from "react";
import "./Home-clock.css";
function HomeClock() {
  let today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  const hours = hour % 12 || 12;

  const timer1 = `${hours}:${addZero(min)}:${addZero(sec)} ${amPm}`;

  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }

  return (
    <div className="clock">
      <span id="time">{timer1}</span>

      <span id="brand">Pixel Bank </span>
      <span id="greeting">Let's get started</span>
    </div>
  );
}

export default HomeClock;
