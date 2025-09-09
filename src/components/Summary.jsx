import React from "react";
import RateOf from "./RateOf";
import Button from "./Button";
import { reaction, memory, verbal, visual } from "./images.config";
function Summary() {
  return (
    <section className="p-7.5 lg:py-9 lg:px-10.25 pb-0  flex flex-col gap-6 lg:gap-8  lg:w-[calc(753px/2)] ">
      <h2 className="text-lg lg:text-2xl text-start font-bold text-dark-gray-blue">
        Summary
      </h2>
      <div className="summary__rating-info gap-4 flex flex-col font-bold">
        <RateOf
          title="Reaction"
          img={reaction}
          alt="reaction icon"
          degree={80}
          backgroundColor="bg-light-red-opacity"
          titleColor="text-light-red"
        />
        <RateOf
          title="Memory"
          img={memory}
          alt="memory icon"
          degree={92}
          backgroundColor="bg-orangey-yellow-opacity"
          titleColor="text-orangey-yellow"
        />
        <RateOf
          title="Verbal"
          img={verbal}
          alt="verbal icon"
          degree={61}
          backgroundColor="bg-green-teal-opacity"
          titleColor="text-green-teal"
        />
        <RateOf
          title="Visual"
          img={visual}
          alt="visual icon"
          degree={73}
          backgroundColor="bg-cobalt-blue-opacity"
          titleColor="text-cobalt-blue"
        />
      </div>
      <Button />
    </section>
  );
}

export default Summary;
