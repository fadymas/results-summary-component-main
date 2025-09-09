import React from "react";

function RateOf({ title, img, alt, degree, backgroundColor ,titleColor}) {
  return (
    <div
      className={`flex justify-between items-center rounded lg:rounded-xl p-4 ${backgroundColor}  text-dark-gray-blue`}
    >
      <div className="rating-title flex gap-2.5 ">
        <img loading="lazy" src={img} alt={alt} />
        <b className={titleColor}>{title}</b>
      </div>
      <div className="rating">
        <p>{degree} / 100</p>
      </div>
    </div>
  );
}

export default RateOf;
