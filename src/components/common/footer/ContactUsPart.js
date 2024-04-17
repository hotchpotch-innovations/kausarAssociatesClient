import React from 'react';
import {BsFillTelephoneFill, BsFillQuestionCircleFill} from 'react-icons/bs';
import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {MdLocationOn} from 'react-icons/md';
import {AiFillMobile} from 'react-icons/ai';

const ContactUsPart = () => {
    return (
        <div className='col-span-2 mt-4 md:mt-0 lg:mt-0'>
            <div>
                <h1 className='text-base md:text-base lg:text-lg underline font-semibold'>Contact Us</h1>
            </div>
            <div className='text-xs mt-2'>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className='mx-2 text-inline flex justify-start items-start leading-5 text-justify'><MdLocationOn/></td>
                            <td className='mx-2 leading-5 text-justify'>
                                Tropical Alauddin Tower (7th floor, Flat: 7-E,), Holding No: 32/C, Road - 02, Sector - 03, Uttara, Dhaka-1230, Bangladesh
                            </td>
                        </tr>
                        <tr>
                            <td className='mx-2 text-inline flex justify-start items-start leading-5 text-justify'><GrMail/></td>
                            <td className='mx-2 leading-5 text-justify'>
                                kausarandassociates@gamil.com
                            </td>
                        </tr>
                        <tr>
                            <td className='mx-2 text-inline flex justify-start items-start leading-5 text-justify'></td>
                            <td className='mx-2 leading-5 text-justify'>
                                info@kausarassociates.com.bd
                            </td>
                        </tr>
                        <tr>
                            <td className='mx-2 text-inline flex justify-start items-start leading-5 text-justify'><BsFillTelephoneFill/></td>
                            <td className='mx-2 leading-5 text-justify'>
                            +8802 41091377
                            </td>
                        </tr>
                        <tr>
                            <td className='mx-2 text-inline flex justify-start items-start leading-5 text-justify'><AiFillMobile/></td>
                            <td className='mx-2 leading-5 text-justify'>
                            +8801912 527467
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactUsPart;