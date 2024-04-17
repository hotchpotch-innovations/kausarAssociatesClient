import Link from 'next/link';
import React from 'react';

const BackToHomeButton = () => {
    return (
        <button className='absolute bottom-5 right-5 px-4 pb-2 pt-8 bg-blue-400 text-white hover:bg-blue-600 duration-500 text-xs cursor-pointer capitalize mask mask-triangle'>
            <Link href={"/"}>Home</Link>
        </button>
    );
};

export default BackToHomeButton;