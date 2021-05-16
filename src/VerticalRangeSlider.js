import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const VerticalRangeSlider = () => {
  const [value, setValue] = useState(250);
  const rangeEl = useRef(null);
  const bubbleEl = useRef(null);

  useEffect(() => {
    const newValue = Number(
      ((rangeEl.current?.value - rangeEl.current?.min) * 7.5) /
      (rangeEl.current?.max - rangeEl.current?.min)
    );
    const newPosition = newValue / 0.2;
    if (bubbleEl.current)
      bubbleEl.current.innerHTML = `<span>${rangeEl.current?.value}</span>`;
    if (bubbleEl.current)
      bubbleEl.current.style.top = `calc(${newValue}% + 250px - (${newPosition}%))`;
  }, [value]);

  return (
    <div className="range-wrap">
      {value && <output ref={bubbleEl} id="bubbleEl" className="range-value">
        <span></span>
      </output>}
      <input
        ref={rangeEl}
        id="range"
        type="range"
        min="0"
        max="500"
        step="5"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default VerticalRangeSlider;
