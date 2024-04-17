import React from 'react';

const ContactForm = () => {
    return (
        <div className='w-2/3 md:w-1/2 lg:w-1/2 mx-auto space-y-4'>
            <div>
                <input type='text' className='w-full border py-2 rounded-sm bg-transparent pl-2' placeholder='Enter Your Name'></input>
            </div>
            <div>
                <input type='text' className='w-full border py-2 rounded-sm bg-transparent pl-2' placeholder='Enter Your Email'></input>
            </div>
            <div>
                <input type='text' className='w-full border py-8 rounded-sm bg-transparent pl-2' placeholder='Enter Your Message'></input>
            </div>
            <div>
                <input type='submit' className='w-full border py-2 rounded-sm bg-transparent text-center hover:bg-primary text-gray-300 hover:text-white duration-500 cursor-pointer' value={'Sent Message'}></input>
            </div>
        </div>
    );
};

export default ContactForm;