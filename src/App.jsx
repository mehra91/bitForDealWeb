import {useState} from 'react';
import MostHeader from './components/MostHeader';

import Carousel from './components/Carousel';
import { CiGrid42 } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa6";
import Cards from './components/Cards';
import AboutCard from './components/AboutCard';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
import QuesCard from './components/QuesCard';
import Footer from './components/Footer';



const App = () => {
    const Products = [
        {
            img: "/faceCream.jpeg",
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

    const QuesAns =  [
        {
            Ques:"Is Bid for deal legit",
            Ans: "✅ Yes, Bid for Deal has been in business since 2020 with millions of customers and verified suppliers."
        },
         {
            Ques: "What happens if I don't win an auction ? ",
            Ans: "👉 You can use the Buy It Now (BIN) option to purchase the product at retail and get all your bids back."
        },
         {
            Ques:"Are the products new" ,
            Ans: "✅ 100% brand-new items, shipped from authorized partners with manufacturer warranty."
        },
         {
            Ques:"Do I pay for shipping" ,
            Ans: "🚚 No,ShopHub provides  free shipping on all items."
        },
         {
            Ques: "How do I  get bids",
            Ans: "👉 You can purchase bid packs from the website. Sometimes, special promotions offer extra bids at discounted prices."
        }
    ]

     
  return (
         <div >
                <MostHeader />
                <Carousel />



            <div className='  flex items-center justify-between p-10   font-semibold  h-20 w-full'>
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
                                    className="absolute right-2 top-1/2  transform -translate-y-1/2  text-black cursor-pointer  "
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
                {/* About Section */}


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
                <div className="w-240 h-96 mt-8 ml-15 mr-8  rounded-2xl shadow-lg text-center px-6 py-10 bg-gradient-to-b from-orange-400 to-indigo-950 text-white">
                             
                     <h2 className="text-3xl font-bold  tracking-tighter mt-8  mb-2">
                        <span className="gap-1">💥</span> Ready to Win Your Favorite Products at 90% Off?
                    </h2>
                    <p className="text-lg text-slate-300 font-semibold mb-6">
                       👉 Join millions of happy bidders today.
                    </p>

                          
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                         <button className="border border-white/60 text-white px-4 py-3 rounded-lg font-semibold cursor-pointer    ">
                            Sign Up Free
                        </button>
                        <button className="border border-white/60 text-white px-4 py-3 rounded-lg font-semibold cursor-pointer">
                            Browse Auctions Now
                        </button>
                         <button className="border border-white/60 text-white px-4 py-3 rounded-lg font-semibold cursor-pointer">
                             Get Your First Bid Pack
                         </button>
                    </div>
 
                    <div className="flex flex-wrap justify-evenly items-start gap-y-8 text-center">
                        <div className="flex flex-col items-center w-52">
                            <div className="text-cyan-400 text-3xl ">
                                <FaCheckCircle />
                            </div>
                                <h3 className="font-bold text-lg ">
                                    Easy to Join
                                </h3>
                                    <p className="text-sm text-gray-200">
                                        Sign up in 30 seconds and get a welcome bid.
                                    </p>
                        </div>

                        <div className="flex flex-col items-center w-52">
                            <div className="text-yellow-400 text-3xl">
                                <IoMdContacts />
                            </div>
                                <h3 className="font-semibold text-lg ">
                                    Real Winners
                                </h3>
                                <p className="text-sm text-gray-200">
                                    Thousands of verified wins every week.
                                </p>
                        </div>

                        <div className="flex flex-col items-center w-52">
                            <div className="text-green-400 text-3xl ">
                                <IoIosLock />
                            </div>
                                <h3 className="font-semibold text-lg">
                                    Secure Payments
                                </h3>
                                <p className="text-sm text-gray-200">
                                    Trusted checkout & buyer protection.
                                </p>
                        </div>
                    </div>
                </div>
                {/* frequently asked question section */}
             
                <div className='  h-screen w-full     items-center  p-4    '>
                    <h2 className='text-2xl font-semibold capitalize flex items-center justify-center flex-col '>
                        frequently asked Questions
                         <div className='h-1 bg-orange-500 w-24 rounded-2xl flex items-center pl-10 mt-2 '>
                            <div className='h-1 bg-white rounded-2xl  opacity-80     w-8 '>

                            </div>
                        </div>
                    </h2>
                     <div className='flex items-center justify-evenly m-8 pt-3   h-full w-240'>
                        <img src="/query.jpg" alt="queryImg" className='h-full w-1/2 ' />
                          <div className='  h-full w-full flex items-center justify-evenly flex-col'>
                            {
                                QuesAns.map((props,idx)=>(
                                    <QuesCard 
                                        key={idx}
                                        Ques={props.Ques}
                                        Ans = {props.Ans}
                                    />
                                ))
                            }
                         </div>   
                    </div>
                </div>

                <div className='h-screen w-full mt-25 flex items-center justify-center border  flex-col   border-slate-200 rounded-2xl'>
                    
                                    <Footer/>
                                     
                </div>
                
            </div>


            
        </div>
    )
}

export default App;