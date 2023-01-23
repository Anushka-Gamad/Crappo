import React from 'react';

//import data 
import { currency } from '../data';

//import icons 
import { IoIosArrowForward } from 'react-icons/io';


const Trade = () => {
  return (
    <section className='section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]'>
      <div className='container mx-auto'>
        <h2 className='section-title text-center mb-16'>
          Trade securely and market the high growth cryptocurrencies.
        </h2>
        {/*items */}
        <div className='flex flex-col gap-[45px] lg:flex-row'>
          {currency.map((item, index) =>{
            //destructor item
            const { image, name, abbr, description } = item;
            return(
              //item
              <div className='w-full rounded-2x py-12 px-6 shadow-primary cursor-pointer transition duration-300' key={index}>
                <div className='flex flex-col justify-center items-center'>
                  {/*item image */}
                  <img className='mb-12' src={image} alt='' />
                  {/* item name */}
                  <div className='mb-4 flex items-center gap-x-2'>
                    <div className='text-[32px]'>{name}</div>
                    <div>{abbr}</div>
                    {/*description */}
                    <p>{description}</p>
                    {/*btn */}
                    <button>Start Mining</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
