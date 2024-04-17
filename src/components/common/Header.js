import Link from 'next/link';
import React from 'react';
import {BsFillTelephoneFill, BsFillQuestionCircleFill} from 'react-icons/bs';
import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {MdLocationOn} from 'react-icons/md';

const Header = () => {
    return (
        <header>
           <div className="w-full bg-primary py-2 px-2 lg:px-4 text-white">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex justify-start items-center text-xs">
                    <div className="mx-2">
                        <BsFillTelephoneFill className="inline text-base"/>
                    <span> +8801735 887 882, 01821 390 490</span>
                    </div>
                    <div className="mx-2">
                        <GrMail className="inline text-base"/>
                    <span className="ml-1">kausarandassociates@gamil.com</span>
                    </div>
                    
                    <div className="mx-2">
                        <MdLocationOn className="inline text-base"/>
                        <span className="ml-1">Tropical Alauddin Tower, Sector-03,  Uttara, Bangladesh</span>
                    </div>
                </div>
                <div className="w-full lg:w-auto flex justify-between items-center text-xs">
                    <div className="mx-1 lg:mx-2">
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

                    <div className="mx-2">
                    <div className="w-[1px] h-6 bg-white"></div>
                    </div>

                    <div className="mx-2 flex justify-between items-center">
                        <div className="mr-6 hidden md:block">
                        <BsFillQuestionCircleFill className="inline text-sm lg:text-lg mr-1 lg:mr-2"/>
                        <span className='text-xs'>Have any Question</span>
                        </div>
                        <div>
                            <button className="px-2 lg:px-4 py-1 text-primary rounded-full bg-white hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out">
                                Get Apponintment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </header>
    );
};

export default Header;