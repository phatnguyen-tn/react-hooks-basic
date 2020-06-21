import React from "react";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock(props) {
  const { timeString } = useClock();

  return <h1>{timeString}</h1>;
}

export default Clock;
