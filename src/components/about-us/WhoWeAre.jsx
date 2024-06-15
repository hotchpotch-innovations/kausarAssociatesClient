import React from 'react';
import AbsoluteText from '../common/absoluteText/AbsoluteText';
import Image from 'next/image';
import taxImage from '../../assets/images/tax.jpeg';

const WhoWeAre = () => {
    return (
        <section className='content-container'>
            <div>
                <AbsoluteText text={'WHO WE ARE'} isTextCenter={false} isTextWhite={false}></AbsoluteText>
            </div>
            <div className=' flex-none md:flex-none lg:flex justify-between items-center my-4'>
                <div className='text-xs md:text-sm lg:text-xs text-justify w-full md:w-full lg:w-1/2 mb-6 md:mb-8 lg:mb-0'>
                    <p className='mb-2'>
                    <span className='text-2xl md:text-3xl lg:text-4xl text-primary'>K</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className='mb-2'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className='mb-2'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>
                <div className='w-full md:w-full lg:w-1/2 -mt-0 md:-mt-0 lg:-mt-14'>
                    <div>
                        <Image src={taxImage} alt='' width={1000} height={1400} className='w-2/3 md:w-2/3 lg:w-4/5 h-auto mx-auto'></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;