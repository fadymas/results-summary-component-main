import React from "react";

function RateOf({ category, img, alt, score, backgroundColor ,categoryColor}) {
  return (
    <div
      className={`flex justify-between items-center rounded lg:rounded-xl p-4 ${backgroundColor}  text-dark-gray-blue`}
    >
      <div className="rating-category flex gap-2.5 ">
        <img loading="lazy" src={img} alt={alt} />
        <b className={categoryColor}>{category}</b>
      </div>
      <div className="rating">
        <p>{score} / 100</p>
      </div>
    </div>
  );
}

export default RateOf;
