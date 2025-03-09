import React from 'react'
import styles from '../style';
import { feedback } from '../constant';
import { quotes } from '../assets';

const Testiomonials = () => {
  return (
    <div className="items-center grid grid-cols-1 w-full mt-20">
      {/* top */}

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <h1 className="text-white sm:leading-20 text-[45px] font-poppins font-semibold">
            What people are saying about us
          </h1>
        </div>
        <div className='flex items-center justify-center'>
          <p className={`${styles.paragraph}`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      {/* bottom */}

      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-20 mt-16'>
           {feedback.map((feed, index)=>{
            return (
              <div key={feed.id} className="flex flex-col gap-10 py-6 px-4 feedback-card rounded-3xl">
                <img src={quotes} alt="qoute" width={40}/>
                <p className={`${styles.paragraph}`}>{feed.content}</p>
                <div className="flex w-full gap-5">
                  <div>
                    <img
                      src={feed.img}
                      alt={feed.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className='text-white font-semibold font-poppins'>{feed.name}</h1>
                    <p className={`${styles.paragraph}`}>{feed.title}</p>
                  </div>
                </div>
              </div>
            );
           })}
      </div>
    </div>
  );
}

export default Testiomonials