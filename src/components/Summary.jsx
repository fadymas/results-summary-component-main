import React from "react";
import RateOf from "./RateOf";
import Button from "./Button";
function Summary({ data, loading }) {
  if (loading) {
    return (
      <section className="p-7.5 lg:py-9 lg:px-10.25 pb-0 flex flex-col gap-6 lg:gap-8 lg:w-[calc(753px/2)] ">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>

        <div className="summary__rating-info gap-4 flex flex-col font-bold">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-200"
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* Button placeholder */}
        <div className="h-10 w-full bg-gray-300 rounded-lg"></div>
      </section>
    );
  }
  return (
    <section className="p-7.5 lg:py-9 lg:px-10.25 pb-0  flex flex-col gap-6 lg:gap-8  lg:w-[calc(753px/2)] ">
      <h2 className="text-lg lg:text-2xl text-start font-bold text-dark-gray-blue">
        Summary
      </h2>
      <div className="summary__rating-info gap-4 flex flex-col font-bold">
        {data.map((rate, index) => (
          <RateOf
            key={index}
            category={rate.category}
            img={rate.icon}
            alt={rate.alt}
            score={rate.score}
            backgroundColor={rate.backgroundColor}
            categoryColor={rate.titleColor}
          />
        ))}
      </div>
      <Button />
    </section>
  );
}

export default Summary;
