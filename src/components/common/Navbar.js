'use client'
import Link from 'next/link';
import { useState } from 'react';
import { navlinks } from './navlinks';
import {AiFillCaretDown, AiOutlineClose} from 'react-icons/ai';
import {IoMdArrowDropup} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import Header from './Header';

const Navbar = () => {
    const [open, setOpen]= useState(true);
    const openMenuClass = "top-[60px] opacity-100";
    const closeMenuClass = "top-[-400px] opacity-0";
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const submenuOpenHandler = (data)=>{
       if (openSubMenu) {
        if (openSubMenu?.menu === data) {
            setOpenSubMenu({
                menu : data,
                status : !openSubMenu.status
            })
        } else {
            setOpenSubMenu({
                menu : data,
                status : true
            })
        }
       } else {
        setOpenSubMenu({
            menu : data,
            status : true
        })
       }

    }
    
    return (
        <nav className='sticky top-0'>
            <Header></Header>
         <div className='w-full py-2 px-6 lg:px-12 bg-blue-100 lg:bg-white'>
            <div className=" w-full flex-none lg:flex justify-between items-center lg:items-start">
                <div className='flex justify-between items-center lg:items-start w-full lg:w-auto'>
                    <div>
                        <h3 className="text-lg lg:text-2xl font-bold">Kausar & Associates Ltd.</h3>
                    </div>

                    {/* Toggle Button  */}

                    <div class="block lg:hidden cursor-pointer"> 
                        <div className='text-2xl' onClick={()=>setOpen(!open)}>
                            {/* <ion-icon name={open? "menu" : "close"}></ion-icon> */}
                            {
                                open?
                                <GiHamburgerMenu className='inline'></GiHamburgerMenu>:
                                <AiOutlineClose className='inline'></AiOutlineClose>
                            }
                        </div> 
                    </div>
                </div>

                {/* Menu  */}
                
                    <div className={`flex-none lg:flex bg-blue-100 lg:bg-white  items-center lg:items-start text-xs lg:text-sm z-[-1] md:z-auto md:static absolute w-full lg:w-auto py-4 lg:py-0 lg:pl-0 pl-6 lg:opacity-100 left-0 transition-all ease-in duration-500 ${open ? closeMenuClass : openMenuClass}`}>
                           
                        {
                            navlinks.map(nav => {
                                return <div
                                         key={nav?._id}
                                        >
                                            <div 
                                                
                                                onClick={()=>setOpen(!nav.isSubmenu ? true : false)} 
                                                className="px-4 my-6 lg:my-0 font-semibold">
                                                    {
                                                        !nav.isSubmenu ? 
                                                        <div className='hover:text-blue-800 duration-600'>
                                                         <Link href={nav?.link}>{nav?.menu.toUpperCase()}</Link>
                                                        </div>
                                                        :
                                                        <div className=''>
                                                            <h1 onClick={()=>submenuOpenHandler(nav?.menu)} className='hover:text-blue-800 duration-600 cursor-pointer'>{nav?.menu.toUpperCase()}
                                                                <span className='ml-2'>
                                                                    {
                                                                        (openSubMenu?.menu === nav?.menu && openSubMenu?.status)?
                                                                        <IoMdArrowDropup className='inline'></IoMdArrowDropup> :
                                                                       <AiFillCaretDown className='inline'></AiFillCaretDown>
                                                                    }
                                                                </span>
                                                            </h1>

                                                            {/* Desktop Device  */}
                                                            <div 
                                                            className={(openSubMenu?.menu === nav?.menu && openSubMenu?.status)
                                                            ?
                                                            "duration-500 hidden lg:block absolute top-16 mt-2 px-2 bg-blue-100 rounded"
                                                            :
                                                            "mt-4 hidden duration-500"
                                                            }>
                                                                {
                                                                    nav.submenu.map(item => {

                                                                        return <div 
                                                                                    key={item?._id}
                                                                                    onClick={()=>setOpen(true)} 
                                                                                    className=" pl-4 lg:pl-2 my-6 lg:my-4 font-semibold hover:text-blue-800 duration-600">
                                                                                    <Link href={item?.link}>{item?.menu.toUpperCase()}</Link>
                                                                                </div>
                                                                        })
                                                                }
                                                            </div>

                                                            {/* Mobile Device  */}

                                                            <div 
                                                            className={(openSubMenu?.menu === nav?.menu && openSubMenu?.status)
                                                            ?
                                                            "duration-500 inline-block lg:hidden"
                                                            :
                                                            "mt-4 hidden duration-500"
                                                            }>
                                                                {
                                                                    nav.submenu.map(item => {

                                                                        return <div 
                                                                                    key={item?._id}
                                                                                    onClick={()=>setOpen(true)} 
                                                                                    className=" pl-4 lg:pl-2 my-6 lg:my-4 font-semibold hover:text-blue-800 duration-600">
                                                                                    <Link href={item?.link}>{item?.menu.toUpperCase()}</Link>
                                                                                </div>
                                                                        })
                                                                }
                                                            </div>
                                                        </div>        
                                                        
                                                    }
                                            </div>                                                
                                        </div>
                            })
                        }
                    </div>                                   
            </div>
         </div>       
        </nav>
    );
};

export default Navbar;