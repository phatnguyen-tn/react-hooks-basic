import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};

function formatDate(date) {
  if (!date) return "";

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return <h1>{timeString}</h1>;
}

export default Clock;
