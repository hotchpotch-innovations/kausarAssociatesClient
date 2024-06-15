import Image from 'next/image';
import React from 'react';

const TitleSection = () => {
    return (
        <section className='bg-primary'>
            <div className='w-full content-container text-white flex-none md:flex lg:flex justify-between items-center'>
                <div className='w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0 lg:mb-0'>
                    <p className='text-sm md:text-base lg:text-base font-medium'>
                    Any bond is build on trust. We aspire to create an environment where there is transparency and clarity amongst the people of the organization.
                    </p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/2'>
                    <div>
                        <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7XfmhulRPyOIsqkawAQFC9Tyb5Q8gZtRrLv7W3vS-CvV8-7xp4kQO7KZrH3b1bMP0w&usqp=CAU'} width={600} height={800} className='w-32 h-36 mx-auto' alt=''></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TitleSection;