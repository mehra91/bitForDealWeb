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
    <div className='   mt-5 p-5 border-1 border-slate-200 rounded-2xl flex items-start justify-evenly   h-96 w-auto '>
         <div className='   h-full w-md pl-8 pt-8  '>
                        <img src="/bidfordeal.png" alt="logo" className='h-20 w-50 font-stretch-normal flex items-center justify-center' />
                         <p className='mt-2 p-2 text-lg'>
                            We are a modern and trusted online shopping platform, connecting women, men, and families with the best in electronics, fashion, home essentials, gaming, books, health, beauty and automobile accessories.
                         </p>
                         <div className='  h-10 w-full flex items-center justify-start gap-x-2 size={12} '>
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
         <div className=' h-full   w-lg    flex items-center   justify-evenly  '>
                <div className='  h-60 w-1/3 p-1  ml-3 mr-2   ' >
                        <h2 className='text-lg font-semibold capitalize'>
                            Site link 
                        </h2>
                        <ul className='space-y-2 space-x-0 pt-1  '>
                            <li className='flex items-center  gap-x-2 capitalize text-lg font-smeibold  tracking-tight'>
                                    <span>
                                         <FaChevronRight size={12} />     
                                    </span> About us
                            </li>
                            <li className='flex items-center  gap-x-2 capitalize text-lg font-smeibold  tracking-tight'>
                                 <span>
                                     <FaChevronRight size={12} />     
                                </span>   Contact us
                            </li>
                        </ul>
                </div>
                <div className='  h-60 w-1/3 p-1  ml-3 mr-2  ' >
                        <h2 className='text-lg font-semibold capitalize'>
                            contact 
                        </h2>
                         <ul className='space-y-2 space-x-0 pt-1  '>
                            <li className='flex items-center   gap-x-2 capitalize text-lg font-smeibold tracking-tight'>
                                    <span>
                                         <IoLocationOutline  size={15} />     
                                    </span> Map
                            </li>
                            <li className='flex items-center   gap-x-2 capitalize text-lg font-smeibold tracking-tight'>
                                 <span>
                                     <MdOutlineMailLock  size={15} />     
                                </span>  email
                            </li>
                            <li className='flex items-center   gap-x-2 capitalize text-lg font-smeibold tracking-tight'>
                                 <span>
                                     <IoCallOutline  size={15} />     
                                </span>   +9143204320
                            </li>
                             
                        </ul>

                </div>

                <div className='  h-60 w-1/3 p-1  ml-3 mr-2  ' >
                        <h2 className='text-lg font-semibold capitalize'>
                            help 
                        </h2>
                       
                         <ul className='space-y-2 space-x-0 pt-1  '>
                            <li className='flex items-center   gap-x-2 capitalize text-lg font-smeibold tracking-tight'>
                                    <span>
                                         <FaChevronRight size={10} />     
                                    </span> Privacy policy
                            </li>
                            <li className='flex items-center   gap-x-2 capitalize text-lg font-smeibold tracking-tight'>
                                 <span>
                                     <FaChevronRight size={10} />     
                                </span>  terms & conditions
                            </li>
                            <li className='flex items-center   gap-x-2 capitalize text-lg font-smeibold tracking-tight'>
                                 <span>
                                     <FaChevronRight size={10} />     
                                </span>  orders and shipping
                            </li>
                            <li className='flex items-center   gap-x-2 capitalize text-lg font-smeibold tracking-tight'>
                                 <span>
                                     <FaChevronRight size={12} />     
                                </span>   refund policy
                            </li>
                        </ul>
                </div>
         
         </div>
    </div>
  )
}

export default Footer;