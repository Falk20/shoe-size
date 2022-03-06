import React from "react";

export default function RangeInput(props) {
  function handleChange(e) {
    props.onChange(+e.target.value);
  }

  return (
    <label>
      <p>
        {props.title}: {props.value}
      </p>

      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={handleChange}
      />
    </label>
  );
}
