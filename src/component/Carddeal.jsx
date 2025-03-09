import React from 'react'
import { card } from '../assets';
import styles from '../style';
import Button from './Button';

const Carddeal = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 items-center mt-20">
      {/* left side */}

      <div className="flex flex-col w-full ">
        <h2 className="text-white sm:leading-20 text-[45px] font-poppins font-semibold">
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-8`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>

      {/* right side */}
      <div className="w-full">
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Carddeal