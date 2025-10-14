import {useState} from 'react';
import { RiExchangeDollarLine } from "react-icons/ri";
import { RiAuctionLine } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { LiaGiftSolid } from "react-icons/lia";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
import Carousel from './components/Carousel';
import { CiGrid42 } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa6";
import Cards from './components/Cards';
import AboutCard from './components/AboutCard';


const App = () => {
    const Products = [
        {
            img: "../public/faceCream.jpeg",
            aboutProduct :" Set of 3 - Grown Alchemist - Polishing Facial Exfo...",
            price:0.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹59.00"
        },
        {
            img: " /grinder.jpg",
            aboutProduct :" KitchenAid Artisan Series 5-Quart Mixer, Empire Re...",
            price:971.50,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹199.00"
        },
        {
            img: " /earbuds.jpeg",
            aboutProduct :"Veho STIX II Pro True Wireless Earphones with ANC...",
            price:2998.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹999.00"
        },
        {
            img: " /glasses.jpg",
            aboutProduct :"Earth Wood Kotor Sunglasses - Black Metal / Dark B...",
            price:1992.00,
            timer:"00:00:00",
            button:'sold',
            para:" ₹599.00"
        },
        {
            img: " /headphones.jpg",
            aboutProduct :" Beats Studio Pro - Wireless Noise Cancelling Over-...",
            price:4999.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹999.00"
        },
        {
            img: " /macBook.jpeg",
            aboutProduct :" MacBook Pro",
            price:105000.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹49999.00"
        },
        {
            img: " /iphone.jpg",
            aboutProduct :"MacBook Pro",
            price:135000.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹75000.00"
        },
        {
            img: " /samsung.jpg",
            aboutProduct :" Samsung Galaxy S25 Ultra",
            price:104599.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹39000.00"
        }

    ]
    const aboutWorking = [
        {
            id:"01",
            heading :" - Browse Products",
            para :" Explore a wide variety of brand-new items from electronics, fashion, home essentials to gift cards."
        },
        {
            id:"02",
            heading :" - Buy Bids",
            para :"  To participate in auctions, purchase bid packs. Each bid placed, reduced the item price."
        },
        {
            id:"03",
            heading :" – Join Auctions",
            para :"  Place bids on your favorite products. Every new bid resets the countdown timer."
        },
        {
            id:"04",
            heading :"– Buy It Now (BIN)",
            para :"Didn’t win? No worries! Apply the bids you used toward buying the product at regular retail price."
        },
    ]

     
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
                <Carousel />



            <div className=' mt-10 flex items-center justify-between p-10   font-semibold  h-20 w-full'>
                <div className='w-auto h-20 flex justify-start flex-col gap-y-2'>
                    <h2 className='text-3xl font-semibold'>
                        All Products
                    </h2>
                    <div className='h-1 bg-orange-500 w-24 rounded-2xl flex items-center pl-3  '>
                            <div className='h-1 bg-white rounded-2xl  opacity-80     w-10 '>

                            </div>
                    </div>
                </div>
                <div className=' w-auto h-10 flex items-center justify-end cursor-pointer  ' >
                    <button className='bg-orange-400 rounded px-3 flex items-center justify-center text-white font-semibold   text-lg  cursor-pointer hover:bg-black relative hover:scale-102   hover:-translate-0.5  ' >  <CiGrid42  className='font-bold tracking-tight  ' />Categories 
                            <select className=' w-5 flex items-center justify-center text-black appearance-none border-none outline-none  px-3 py-2 cursor-pointer ' >
                                 
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Home & Kitchen">Home & Kitchen</option>
                                <option value="Smartphones">Smartphones</option>
                                <option value="Books">Books</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Health & Beauty">Health & Beauty</option>
                                <option value="Automative">Automative</option>
                            </select>

                            {/* absoluate icon */}
                            <FaSortDown
                                    className="absolute right-2 top-1/2  transform -translate-y-1/2  text-white cursor-pointer  "
                                    size={20} 
                                />
                    </button>

                </div>
            </div>
             <div className='w-full h-auto   flex flex-wrap items-center justify-evenly   '> 
                {
                    Products.map(( prod,idx)=>(
                             <Cards 
                              key={idx}
                              img={prod.img}
                              about = {prod.aboutProduct}
                              price = {prod.price}
                              timer={prod.timer } 
                              btn={prod.button} 
                              
                              para = {prod.para} />
                    ))
                }
             
            </div>
            <div className=' h-10 w-210 flex items-center justify-center ml-25 mb-10 mt-8 ' >
                    <button className=' flex items-center justify-center border h-8 w-15 rounded-lg text-blue border-blue-600 hover:bg-blue-600 hover:text-white mr-2 hover:cursor-pointer'>
                        prev
                    </button>
                    <span>
                        Page 1 of 1
                    </span>
                    <button className=' flex items-center justify-center border h-8 w-15 rounded-lg text-blue border-blue-600 hover:bg-blue-600 hover:text-white ml-2 hover:cursor-pointer '>
                        next
                    </button>
            </div>
            <div className='   h-screen w-full  '>
                <h4 className='text-3xl flex items-center justify-center font-semibold flex-col '>
                    How It Works
                     <div className='h-1 bg-orange-500 w-24 rounded-2xl flex items-center pl-10 mt-2 '>
                            <div className='h-1 bg-white rounded-2xl  opacity-80     w-8 '>

                            </div>
                    </div>
                </h4>
                <div className='mt-12  flex items-center justify-evenly flex-wrap'>  
                    {
                        aboutWorking.map((props,id)=>(
                                <AboutCard key={id} id={props.id} heading={props.heading} para={props.para} />
                        ))
                    }
                </div>
                <div className='  h-96 w-full mt-5  pl-15 pt-2 pr-2   ' >
                    <h2 className='capitalize text-2xl font-semibold opacity-90  '>
                        About us
                    </h2>
                    
                   <div className=' flex items-start justify-evenly h-full w-full gap-x-2 '>
                  
                        <p className=' flex items-start tracking- justify-center flex-col text-lg mt-2' >
                                Bid For Deal is the world’s premier “fair & honest” bidding site founded in 2020. We’ve delivered millions of brand-new products to satisfied customers across the Europe. Our mission is simple:
                                <ul className="list-disc pl-8 mt-2 ">
                                 
                                    <li>Make shopping exciting, fun, and affordable.</li>
                                    <li>Provide only brand-new items, shipped free, with warranties.</li>
                                    <li>Create a fair bidding environment with transparency and customer protection.</li>
                                </ul>
                         <button className='capitalize bg-orange-400 flex  items-center justify-center h-10 w-32 ml-3 cursor-pointer rounded-lg mt-3 text-white font-bold'>
                            read more
                         </button>
                         </p>
                         <img src="/aboutImg.png" alt="aboutImg" className='h-84 w-full ' />
                         
                   </div>
                   
                   

                </div>


            </div>
        </div>
  )
}

export default App;