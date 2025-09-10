import React, { useState } from "react";

function Button() {
  const [scale, setScale] = useState(100);

  function handleMouseDown() {
    setScale(90);
  }
  function handleMouseUp() {
    setScale(100);
  }
  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      className={`rounded-[1.75rem] scale-${scale} h-14 text-white bg-dark-gray-blue text-lg font-extrabold hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue  transition-all cursor-pointer`}
    >
      Continue
    </button>
  );
}

export default Button;
