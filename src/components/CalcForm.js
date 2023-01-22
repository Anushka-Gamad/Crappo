import React from 'react';

const CalcForm = () => {
  return (
    <div className='w-full bg-pink-600 max-w-[942px] mx-auto'>
      {/*form */}
      <form>
        <input className='placeholder:text-darkblue' type='text' placeholder='Enter your hash rate' />
        <select className='select'>
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>

        </select>
        {/*btn */}
        <button>Calculate </button>
      </form>
    </div>
    );
};

export default CalcForm;
