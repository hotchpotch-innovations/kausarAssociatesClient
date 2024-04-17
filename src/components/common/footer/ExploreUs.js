import Link from 'next/link';
import React from 'react';
import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';

const ExploreUs = () => {
    return (
        <div className='col-span-1 mt-4 md:mt-0 lg:mt-0'>
            <div className='text-xs'>
                <div className='w-32 h-32 border'></div>
                <div className='mt-2'>
                    <p>Explore Us more in social-</p>
                </div>
                <div className="mt-2">
                        <Link href="/">
                        <FaFacebookF className="inline ml-2 lg:ml-4 text-sm lg:text-base"/>
                        </Link>
                        <Link href="/">
                        <FaTwitter className="inline ml-2 lg:ml-4 text-base lg:text-lg"/>
                        </Link>
                        <Link href="/">
                        <FaYoutube className="inline ml-2 lg:ml-4 text-base lg:text-lg"/>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default ExploreUs;