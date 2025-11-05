import React from 'react';
import MostHeader from './MostHeader';
import { FaUserEdit } from "react-icons/fa";
import { CiGrid42 } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlineHistory } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import Footer from './Footer';
const Dashboard = () => {
  return (
    <div>
      
        <div className='top-0  w-full  fixed'>
          <MostHeader />
        </div>
        <div className='  mt-28  w-full h-full '>
          <div className='  h-90 w-full flex pt-1  '>
             <div className='bg-sky-950 h-full w-40 text-white '>
               <div className='flex items-center justify-start h-10  mb-5 pl-1'>
                  <div className='flex items-center justify-center  h-10 w-15  '>
                    <img src="/cartoon.jpg" alt="cartoon" className='h-10 w-auto object-contain  rounded-full' />
                  </div>
                  <div className='flex flex-col items-center justify-start h-10 w-full  tracking-tighter leading-snug  '>
                    <div className='font-bold text-sm cursor-pointer'>Mehra01</div>
                    <div className=' tracking-tighter leading-snug text-xs cursor-pointer  flex items-center justify-center pr-4'><FaUserEdit className='text-xs mr-1 cursor-pointer' />Edit Profile</div>
                  </div>
               </div>


               <div className='  h-ful  px-4 leading-8 list-none w-auto text-xs  '>

                  <li className='flex  items-center px-1 cursor-pointer tracking-tight '> <CiGrid42 className='text-xs mr-1   ' />Dashboard</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <FaWallet className='text-xs mr-1' />My Wallet</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <CgProfile className='text-xs mr-1' />My Profile</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <TbLockPassword className='text-xs mr-1' />Change Password</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <AiOutlineHistory className='text-xs mr-1' />Binding History</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <CiBookmarkPlus className='text-xs mr-1' />Bookmark</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <IoMdCheckboxOutline className='text-xs mr-1' />My Orders</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <FaLocationCrosshairs className='text-xs mr-1' />My Address</li>
                  <li className='flex  items-center px-1 cursor-pointer tracking-tight'> <MdLogout className='text-xs mr-1' />Logout</li>  
               </div>
             </div>
             <div className=' h-full w-220 mr-2 ml-10    px-3    '>
                <h1 className='text-2xl font-medium px-2'>
                  Dashboard overview 
                </h1>
                <div className='flex justify-around w-full  gap-x-4 pt-5   h-80 '>
                    <div className='h-30 w-55 rounded-md  bg-slate-200 flex items-center justify-center cursor-pointer hover:shadow-2xl/30 hover:scale-108 hover:ease-out duration-300 flex-col  ' >
                        <span className=' text-orange-500'>
                          <IoMdCheckboxOutline className='text-4xl'/>
                        </span>
                         <h3 className='text-lg font-medium '>
                          My Orders
                         </h3>
                         <p className='text-xs text-center'> 
                              view and manage your orders
                         </p>
                     </div>
                     <div className='h-30 w-55 rounded-md  bg-slate-200 flex items-center justify-center cursor-pointer hover:shadow-2xl/30 hover:scale-108 hover:ease-out duration-300 flex-col  ' >
                        <span className=' text-orange-500'>
                          <CiBookmarkPlus className='text-4xl'/>
                        </span>
                         <h3 className='text-lg font-medium '>
                          Bookmark Products
                         </h3>
                         <p className='text-xs text-center'> 
                             check your saved products
                         </p>
                     </div>
                     <div className='h-30 w-55 rounded-md  bg-slate-200 flex items-center justify-center cursor-pointer hover:shadow-2xl/30 hover:scale-108 hover:ease-out duration-300 flex-col  ' >
                        <span className=' text-orange-500'>
                          <CgProfile  className='text-4xl'/>
                        </span>
                         <h3 className='text-lg font-medium '>
                          profile
                         </h3>
                         <p className='text-xs text-center'> 
                              view or edit your profile
                         </p>
                     </div>
                </div>
            </div>          
         
          </div>
        </div>
        <Footer />

       
    </div>
  )
}

export default Dashboard