import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';

const Value = ({data}) => {
    return (
        <div className='px-4'>
            <div><BiSearchAlt className='text-8xl mx-auto'/></div>
            <div>
                <h4 className='text-base md:text-lg lg:text-lg font-medium text-center mb-4'>{data?.title}</h4>
                <p className='text-xs text-center'>
                    {data?.body}
                </p>
            </div>
        </div>
    );
};

export default Value;