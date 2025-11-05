import React from 'react'
import { RiExchangeDollarLine, RiAuctionLine } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { LiaGiftSolid } from "react-icons/lia";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

const MostHeader = () => {
  const navigate = useNavigate(); // ✅ initialize navigation

  return (
    <div className='h-25  shadow-xl/30 w-sm mt-0 md:w-full md:h-28 flex items-center justify-center fixed z-10'>
      <div id='topMostHeader' className='h-25 md:h-28 w-sm md:w-full mt-0 p-0 flex flex-col justify-center'>
        
        {/* Header Top Section */}
        <div id='headerOne' className='bg-gradient-to-r from-stone-950 to-orange-400 md:w-full pb-0 md:pb-2 pt-1 md:pt-2 pl-2 mt-0 mb-0 mr-0 flex justify-around md:h-15 h-2/5 w-auto'>
          <div className='flex border-r md:border-r-2 border-white text-white text-xs md:text-lg pl-2 pr-2 md:pr-20 items-center justify-center'>
            <RiAuctionLine className='mr-1' />Active Auction
          </div>
          <div className='flex border-r md:border-r-2 border-white text-white text-xs md:text-lg pl-2 pr-2 md:pr-20 items-center justify-center'>
            <LuArrowLeftRight size={15} className='mr-1' /> Corrigendum
          </div>
          <div className='flex border-r md:border-r-2 border-white text-white text-xs md:text-lg pl-2 pr-2 md:pr-20 items-center justify-center'>
            <RiExchangeDollarLine size={15} className='mr-1' /> Auctions By Value
          </div>
          <div className='flex text-white text-xs md:text-lg pl-2 pr-2 items-center justify-center'>
            <LiaGiftSolid size={15} className='mr-1' /> Results of Auction
          </div>
        </div>

        {/* Header Bottom Section */}
        <div id='headerTwo' className='bg-white h-3/5 mt-0 flex items-center justify-around md:p-2 pl-2 w-auto'>
          <img onClick={()=>navigate('/')} src="/bidfordeal.png" alt="logo" className='h-12 md:h-15 w-auto cursor-pointer' />

          <div className='md:w-100 md:p-5 md:flex md:items-center md:justify-center md:relative hidden'>
            <input
              type="text"
              placeholder='Search for products, brands and more ...'
              className='md:rounded-3xl md:text-sm md:border-2 md:border-indigo-100 md:p-2 md:w-full md:focus:outline-orange-400 md:focus:opacity-100'
            />
            <IoSearchCircleSharp
              size={35}
              className='md:absolute md:top-10 md:right-6 md:-translate-y-1/2 md:text-orange-500 md:text-2xl md:cursor-pointer'
            />
          </div>

          <div className='flex items-center justify-center gap-x-2 md:gap-x-5'>
            {/* ✅ Login Button with navigation */}
            <button
              onClick={() => navigate('/login')} // ✅ go to /login
              className='cursor-pointer border-2 border-black w-22 md:w-28 p-1 md:p-3 rounded-4xl flex h-9 md:h-10 items-center justify-center text-xs md:text-sm font-bold'
            >
              <IoMdLogIn className='mr-1 text-lg' /> Login
            </button>

            <button onClick={()=>navigate('/signUp')} className='w-22 cursor-pointer md:w-28 p-1 md:p-3 rounded-4xl flex h-9 md:h-10 items-center justify-center text-xs md:text-sm font-semibold bg-orange-400 text-white'>
              <BsPersonFillAdd className='mr-1 text-white text-lg' /> Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MostHeader
