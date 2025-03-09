import React from "react";
import styles from "../style";
import { robot, discount } from "../assets";
import Getstarted from "./GetStarted";

const Hero = () => {
  return (
    <div id="home">
      <div className="grid sm:grid-cols-2 grid-cols-1 w-full">
        <div className="w-full flex flex-col sm:ml-16 ml-4 ">
          {/* discount */}
          <div className="flex bg-discount-gradient sm:mt-16 mt-8  min-w-[320px] w-fit h-fit rounded-xl items-center">
            <img
              src={discount}
              alt="discount"
              className="w-[32px] h-[32px] object-contain"
            />
            <p
              className={`flex items-center font-poppins font-normal text-dimWhite md:text-[16px] text-[14px] leading-[30.8px] `}
            >
              <span className="text-white m-1">20%</span>DISCOUNT FOR
              <span className="text-white m-1">1 MONTH</span> ACCOUNT
            </p>
          </div>
          {/*  */}

          {/* Hero text */}

          <div className="flex flex-col">
            <div className="flex ">
              <h1 className="text-white flex-1 text-[52px] font-semibold sm:leading-[80px] sm:text-[72px] leading-[75px]">
                The Next <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Generation</span>
              </h1>
              <div className=" hidden sm:flex sm:mr-36 xl:mr-12 mr-0 ">
                <Getstarted />
              </div>
            </div>
            <h1 className="text-white flex-1 text-[52px] font-semibold sm:leading-[80px] sm:text-[72px] leading-[75px] ">
              Payment Method
            </h1>

            <p className={` ${styles.paragraph} mt-10 max-w-[470px]`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>

          {/*  */}
        </div>

        <div className=" relative w-full flex flex-1 sm:my-0 my-10 sm:ml-16 sm:mt-8">
          <img
            src={robot}
            alt="robot"
            className=" sm:w-[669px] sm:h-[500px] w-full h-[400px]  relative z-5"
          />
          <div className="absolute top-0 w-[40%] h-[35%] z-[0] pink__gradient" />
          <div className="absolute bottom-40 w-[80%] h-[80%] rounded-full z-[1] white__gradient" />
          <div className="absolute bottom-20  w-[50%] h-[50%] z-[0] blue__gradient" />
        </div>
      </div>
      <div className="sm:hidden flex md:mr-4 mr-0 items-center justify-center ">
        <Getstarted />
      </div>
    </div>
  );
};

export default Hero;
