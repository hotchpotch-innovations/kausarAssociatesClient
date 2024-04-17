import Image from 'next/image';
import React from 'react';

const ArticleCard = () => {
    return (
        <div className='h-full w-96 md:w-full lg:w-full mx-auto rounded-lg p-4'>
            <div>
                <Image src={"https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/12/17065538/mc11702.jpg"} width={800} height={1200} alt='' className='h-96 w-full'></Image>
            </div>
            <div className='overflow-hidden flex-col justify-between mt-4'>
                <h1 className='text-base md:text-lg lg:text-xl font-semibold text-justify'>How to obtain VAT/BIN Registration in Bangladesh?</h1>
                <p className='text-gray-500 text-xs md:text-sm lg:text-sm text-justify'>
                This is one of many areas of professional service where our company is well ahead of the competition. Tax consultancy team of
                </p>
            </div>
        </div>
    );
};

export default ArticleCard;