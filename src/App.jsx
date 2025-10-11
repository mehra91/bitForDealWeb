import React from 'react';
import { RiExchangeDollarLine } from "react-icons/ri";
import { RiAuctionLine } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { LiaGiftSolid } from "react-icons/lia";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
import Carousel from './components/Carousel';
import { CiGrid42 } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";

const App = () => {
  return (
         <div>
            <div id='topMostHeader' className=' h-28 w-full mt-0 p-0 flex flex-col justify-center top-0 shadow-xl/30 absolute '>
            
                    <div id='headerOne' className='bg-linear-to-r from-stone-950 to-orange-400 h-2/5 w-full  pb-2 pt-2 pl-2 mt-0 mb-0 flex justify-around'>
                    <div className='flex border-r-2 border-white text-white text-md pr-20 items-center justify-center ' ><RiAuctionLine size={15} className='mr-1 flex items-center justify-center' />Active  Auction</div>
                    <div className='flex border-r-2 border-white text-white text-md pr-20 items-center justify-center ' > <LuArrowLeftRight size={15}  className='mr-1 flex items-center justify-center' /> Corrigendum</div>
                    <div className='flex border-r-2 border-white text-white text-md pr-20 items-center justify-center ' ><RiExchangeDollarLine size={15}  className='mr-1 flex items-center justify-center'  /> Auctions By Value</div>
                    <div className='flex  text-white text-md pr-5 items-center justify-center ' ><LiaGiftSolid size={15}  className='mr-1 flex items-center justify-center' /> Results of Auction</div>
                    </div>



                    <div id='headerTwo'className=' bg-white h-3/5 mt-0   flex items-center  justify-around p-2  '>
                        <img src="./public/bidfordeal.png" alt="logo" className='h-15 w-auto font-stretch-normal flex items-center justify-center' />
                        <div className=' w-100  p-5 flex items-center justify-center ' >
                            <input type="text" placeholder='Search for products,brands and more ...' className=' rounded-3xl border-2 border-indigo-100 p-2  w-full focus:outline-orange-400 focus:opacity-100'  />
                            <IoSearchCircleSharp size={35} className='absolute top-20 left-160 -translate-y-1/2 text-orange-500 text-2xl cursor-pointer ' />
                        </div>
                        <div className='flex items-center justify-center gap-x-5' >
                            <button className='border-2 border-black w-28 p-3 rounded-4xl flex h-10 items-center justify-center text-sm font-bold  '>
                                    <IoMdLogIn size={20} className='mr-1' /> Login
                            </button>
                            <button className=' w-28 p-3 rounded-4xl flex h-10 items-center justify-center text-lg font-semibold  bg-orange-400 text-white'>
                                    <BsPersonFillAdd  size={22} className='mr-1 text-white' /> Signup
                            </button>
                        </div>
                        
                    </div>
                    
                    
                
            </div>
                {/* <Carousel /> */}



            <div className='mt-40 flex items-center justify-between p-10 text-2xl font-semibold  h-auto w-full'>
                <div className='w-1/2  h-20 flex items-center justify-start'>
                    <h2>
                        All Products
                    </h2>
                </div>
                <div className=' w-1/2 flex items-center justify-end h-20 ' >
                    <button className='bg-orange-500 rounded   p-2 flex items-center justify-center' >  <CiGrid42 size={15} />Categories 
                            <select id="action" >
                            <option value=""><FaCaretDown size={25} className='text-white' /></option>
                            <option value="edit">Edit</option>
                            <option value="delete">Delete</option>
                            <option value="view">View</option>
                            </select>
                    </button>

                </div>
            </div>
        </div>
  )
}

export default App;