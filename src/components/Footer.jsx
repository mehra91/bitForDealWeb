import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <>
        <div className='   mt-5 p-3   md:flex  items-start md:justify-evenly  h-auto md:h-96 md:w-240 w-96   '>
            <div className='   h-full w-xs md:w-md pl-5 md:pl-8 md:pt-8 pt-1   '>
                            <img src="/bidfordeal.png" alt="logo" className='md:h-20 h-18 w-50 md:w-55 font-stretch-100% flex items-center justify-center' />
                            <p className='mt-2 md:p-2 text-base md:text-lg'>
                                We are a modern and trusted online shopping platform, connecting women, men, and families with the best in electronics, fashion, home essentials, gaming, books, health, beauty and automobile accessories.
                            </p>
                            <div className=' h-15 md:h-10 w-full flex items-center justify-start gap-x-2  '>
                                <small className='bg-orange-500 flex items-center justify-center h-8 w-8 rounded-md '>
                                    <RiFacebookLine size={20} className='text-white' />
                            </small>
                            <small className='bg-orange-500 flex items-center justify-center h-8 w-8 rounded-md '>
                                    <IoLogoInstagram size={20} className='text-white' />
                            </small>
                            <small className='bg-orange-500 flex items-center justify-center h-8 w-8 rounded-md ' >
                                    <AiFillYoutube size={20} className='text-white'  />
                            </small>
                            </div>
            </div>
            <div className='h-auto md:h-full md:w-lg  w-90  items-start     md:flex md:items-center  md:justify-evenly   '>
                    <div className='h-auto md:h-60 md:w-1/3 p-1  ml-3 mr-2    ' >
                            <h2 className=' text-base md:text-lg font-bold md:font-semibold capitalize'>
                                Site link 
                            </h2>
                            <ul className='space-y-2 space-x-0 pt-1  '>
                                <li className='flex items-center  gap-x-2 capitalize  text-base md:text-lg font-smeibold  tracking-tight'>
                                        <span>
                                            <FaChevronRight size={12} />     
                                        </span> About us
                                </li>
                                <li className='flex items-center  gap-x-2 capitalize  text-base md:text-lg font-smeibold  tracking-tight'>
                                    <span>
                                        <FaChevronRight size={12} />     
                                    </span>   Contact us
                                </li>
                            </ul>
                    </div>
                    <div className=' h-auto md:h-60 md:w-1/3 p-1  ml-3 mr-2    ' >
                            <h2 className='text-base md:text-lg font-bold md:font-semibold capitalize'>
                                contact 
                            </h2>
                            <ul className='space-y-2 space-x-0 pt-1  '>
                                <li className='flex items-center   gap-x-2 capitalize text-base md:text-lg font-smeibold tracking-tight'>
                                        <span>
                                            <IoLocationOutline  size={15} />     
                                        </span> Map
                                </li>
                                <li className='flex items-center   gap-x-2 capitalize text-base md:text-lg font-smeibold tracking-tight'>
                                    <span>
                                        <MdOutlineMailLock  size={15} />     
                                    </span>  email
                                </li>
                                <li className='flex items-center   gap-x-2 capitalize text-base md:text-lg font-smeibold tracking-tight'>
                                    <span>
                                        <IoCallOutline  size={15} />     
                                    </span>   +9143204320
                                </li>
                                
                            </ul>

                    </div>

                    <div className=' h-auto md:h-60 md:w-1/3 p-1  ml-3 mr-2   ' >
                            <h2 className='text-lg font-bold md:font-semibold capitalize'>
                                help 
                            </h2>
                        
                            <ul className='space-y-2 space-x-0 pt-1  '>
                                <li className='flex items-center   gap-x-2 capitalize text-base md:text-lg font-smeibold tracking-tight'>
                                        <span>
                                            <FaChevronRight size={10} />     
                                        </span> Privacy policy
                                </li>
                                <li className='flex items-center   gap-x-2 capitalize text-base md:text-lg font-smeibold tracking-tight'>
                                    <span>
                                        <FaChevronRight size={10} />     
                                    </span>  terms & conditions
                                </li>
                                <li className='flex items-center   gap-x-2 capitalize text-base md:text-lg font-smeibold tracking-tight'>
                                    <span>
                                        <FaChevronRight size={10} />     
                                    </span>  orders and shipping
                                </li>
                                <li className='flex items-center   gap-x-2 capitalize text-base md:text-lg font-smeibold tracking-tight'>
                                    <span>
                                        <FaChevronRight size={12} />     
                                    </span>   refund policy
                                </li>
                            </ul>
                    </div>
            
            </div>
            
        </div>
        <div className='bg-slate-200 h-12 text-sm md:text-base md:h-10 w-92 md:w-240 mt-5 flex items-center justify-center rounded-2xl mb-5 ml-2 md:ml-12 '>
                Copyright © 2025. All rights reserved. Developed by IWS
        </div>
    </>
  )
}

export default Footer;