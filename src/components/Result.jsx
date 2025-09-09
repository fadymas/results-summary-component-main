import React from "react";

function Result() {
  return (
    <section className="py-6 flex flex-col items-center rounded-b-[2.125rem] gap-6 lg:gap-8.5 lg:rounded-[1.5rem] lg:py-9.5 text-white bg-gradient-to-b from-light-slate-blue to-light-royal-blue lg:w-[calc(753px/2)]">
      <h1 className="text-lg lg:text-2xl font-semibold">Your Result</h1> 
      <div className="result__circle rounded-full flex flex-col py-5 justify-end lg:justify-center items-center w-35 h-35 lg:w-50 lg:h-50 bg-gradient-to-b from-violet-blue to-persian-blue ">
        <h3 className="text-[3.5rem] lg:text-[4.5rem] font-extrabold h-19 lg:h-23">
          76
        </h3>
        <p className="font-bold lg:text-lg ">of 100</p>
      </div>
      <div className="result__rating-message flex flex-col justify-center items-center gap-2 lg:gap-4 font-medium w-65.5 ">
        <h3 className="text-[1.4375rem] lg:text-[2rem]">Great</h3>
        <p className="text-light-lavender indent-0.5 lg:text-lg/tight  lg:text-center">
          You Scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}

export default Result;
