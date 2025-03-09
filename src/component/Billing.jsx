import React from 'react'
import { bill, apple, google } from '../assets'
import styles from '../style';

const Billing = () => {
  return (
    <div
      id="product"
      className="grid sm:grid-cols-2 grid-cols-1 items-center mt-20"
    >
      {/* left side */}
      <div className="w-full">
        <img src={bill} alt="bill" className="w-full h-full" />
      </div>

      {/* right side */}

      <div className="flex flex-col w-full ">
        <h2 className="text-white sm:leading-20 text-[45px] font-poppins font-semibold">
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-8`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex mt-8 gap-4">
          <img src={google} alt="play store" />
          <img src={apple} alt="istore" />
        </div>
      </div>
    </div>
  );
}

export default Billing