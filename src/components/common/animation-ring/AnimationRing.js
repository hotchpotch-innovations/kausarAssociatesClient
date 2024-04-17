import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';

const AnimationRing = () => {
    return (
      <div className="w-44 h-44 border-2 bg-transparent cursor-pointer flex justify-center items-center">
        <div className='w-20 h-20 border-2 border-blue-300 cursor-pointer flex justify-center items-center rounded-full ring-animation-circle'>
          <div className="w-14 h-14 border-2 bg-blue-300 cursor-pointer flex justify-center items-center rounded-full ring-animation-fill">
            <div className="w-10 h-10 border bg-blue-500 cursor-pointer rounded-full flex justify-center items-center">
                <BsFillTelephoneFill className='text-white block ring-animation-icon text-xl'/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AnimationRing;