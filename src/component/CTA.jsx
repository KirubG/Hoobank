import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full mt-20 bg-black-gradient-2 rounded-2xl py-5">
      {/* Left  */}
      <div className="flex-1 lg:basis-[70%] flex flex-col justify-center items-start pl-20">
        <h1 className="text-white sm:leading-20 text-[45px] font-poppins font-semibold">
          Let’s try our service now!
        </h1>
        <p className={`${styles.paragraph} w-[80%]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/* Right */}
      <div className="flex justify-center lg:basis-[30%] w-full mt-5 lg:mt-0">
        <Button />
      </div>
    </div>
  );
};

export default CTA;
