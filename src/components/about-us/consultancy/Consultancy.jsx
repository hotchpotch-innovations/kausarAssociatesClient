import React from 'react';
import {BiSolidFileDoc} from 'react-icons/bi';

const Consultancy = ({serial, title, body, isTextStart, isTextEnd }) => {
    return (
        <div className='w-full mx-auto mb-6 h-auto md:h-80 lg:h-60 px-6'>
            <div className={`mb-4 ${isTextStart && "text-center md:text-start lg:text-start"} ${isTextEnd && "text-center md:text-end lg:text-end"}`}>
            <BiSolidFileDoc className={`text-3xl md:text-4xl lg:text-5xl inline ${isTextStart && "text-center md:text-start lg:text-start"} ${isTextEnd && "text-center md:text-end lg:text-end"}`}/>
            </div>
            <div>
                <h1 className={`text-base md:text-lg lg:text-xl font-semibold mb-3 ${isTextStart && "text-center md:text-start lg:text-start"} ${isTextEnd && "text-center md:text-end lg:text-end"}`}><span className='text-orange-700'>{serial}-</span> {title}</h1>
                <p className={`text-xs md:text-sm lg:text-sm text-gray-400 ${isTextStart && "text-center md:text-start lg:text-start"} ${isTextEnd && "text-center md:text-end lg:text-end"}`}>
                {body}
                </p>
            </div>
        </div>
    );
};

export default Consultancy;