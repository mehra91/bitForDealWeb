import {useEffect, useState} from 'react';
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
    

    const Products = [
        {
            img: "/faceCream.jpeg",
            aboutProduct :" Set of 3 - Grown Alchemist - Polishing Facial Exfo...",
            price:0.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹59.00",
            category:"Beauty"
        },
        {
            img: " /grinder.jpg",
            aboutProduct :" KitchenAid Artisan Series 5-Quart Mixer, Empire Re...",
            price:971.50,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹199.00",
            category:"Home & Kitchen"
        },
        {
            img: " /earbuds.jpeg",
            aboutProduct :"Veho STIX II Pro True Wireless Earphones with ANC...",
            price:2998.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹999.00",
            category:"Gaming"
        },
        {
            img: " /glasses.jpg",
            aboutProduct :"Earth Wood Kotor Sunglasses - Black Metal / Dark B...",
            price:1992.00,
            timer:"00:00:00",
            button:'sold',
            para:" ₹599.00",
            category:"Fashion"
        },
        {
            img: " /headphones.jpg",
            aboutProduct :" Beats Studio Pro - Wireless Noise Cancelling Over-...",
            price:4999.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹999.00",
            category:"Gaming"
        },
        {
            img: " /macBook.jpeg",
            aboutProduct :" MacBook Pro",
            price:105000.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹49999.00",
            category:"Gaming"
        },
        {
            img: " /iphone.jpg",
            aboutProduct :"iPhone 15 Pro Max",
            price:135000.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹75000.00",
            category:"Smartphones"
        },
        {
            img: " /samsung.jpg",
            aboutProduct :" Samsung Galaxy S25 Ultra",
            price:104599.00,
            timer:"00:00:00",
            button:'Closed',
            para:" ₹39000.00",
            category:"Smartphones"
        },
        {
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-blue-titanium",
    aboutProduct: "Apple iPhone 15 Pro Max",
    price: 159999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹89999.00",
    category: "Smartphones"
  },
  {
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-m3-2025",
    aboutProduct: "Apple MacBook Air M3 (2025) – 13-inch",
    price: 124999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹79999.00",
    category: "Laptops"
  },
  {
    img: "https://m.media-amazon.com/images/I/51eOztNdGLL._SL1500_.jpg",
    aboutProduct: "Sony PlayStation 5 Slim (1TB)",
    price: 54999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹41999.00",
    category: "Gaming"
  },
  {
    img: "https://m.media-amazon.com/images/I/51ZyJvPtN5L._SL1000_.jpg",
    aboutProduct: "Dyson Supersonic Hair Dryer",
    price: 38999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹28999.00",
    category: "Beauty"
  },
  {
    img: "https://static.nike.com/a/images/t_default/3c6b2f0d-2f9e-4dcb-9d7a-72c093d29c85/air-zoom-pegasus-41-running-shoes.png",
    aboutProduct: "Nike Air Zoom Pegasus 41 Running Shoes",
    price: 12999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹7999.00",
    category: "Fashion"
  },
  {
    img: "https://m.media-amazon.com/images/I/71Zf9uUp+GL._SL1500_.jpg",
    aboutProduct: "Canon EOS R7 Mirrorless Camera (Body Only)",
    price: 114999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹89999.00",
    category: "Cameras"
  },
  {
    img: "https://m.media-amazon.com/images/I/61u48FEs0rL._SL1500_.jpg",
    aboutProduct: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 29999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹21999.00",
    category: "Audio"
  },
  {
    img: "https://m.media-amazon.com/images/I/61M8hIo0YWL._SL1500_.jpg",
    aboutProduct: "KitchenAid Artisan Mixer 5-Quart",
    price: 58999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹42999.00",
    category: "Home Appliances"
  },
  {
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-series10-hero",
    aboutProduct: "Apple Watch Series 10 GPS 45mm",
    price: 49999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹33999.00",
    category: "Wearables"
  },
    {
    img: "https://m.media-amazon.com/images/I/71Sa8+9fQML._SL1500_.jpg",
    aboutProduct: "OnePlus 13 Pro 5G (Emerald Green, 256GB)",
    price: 84999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹59999.00",
    category: "Smartphones"
  },
  {
    img: "https://m.media-amazon.com/images/I/61bM+3d8ufL._SL1500_.jpg",
    aboutProduct: "Dell XPS 14 (2025) OLED Laptop",
    price: 169999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹129999.00",
    category: "Laptops"
  },
  {
    img: "https://m.media-amazon.com/images/I/71XzA4pXHLL._SL1500_.jpg",
    aboutProduct: "Samsung 55-inch 4K QLED Smart TV (2025)",
    price: 78999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹56999.00",
    category: "Electronics"
  },
  {
    img: "https://m.media-amazon.com/images/I/71nyg4YJ6HL._SL1500_.jpg",
    aboutProduct: "Boat Airdopes 441 Pro TWS Earbuds",
    price: 3999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹2499.00",
    category: "Audio"
  },
  {
    img: "https://m.media-amazon.com/images/I/71ZJQEZbECL._SL1500_.jpg",
    aboutProduct: "LG 9kg Front Load Washing Machine AI Direct Drive",
    price: 58999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹46999.00",
    category: "Home Appliances"
  },
  {
    img: "https://m.media-amazon.com/images/I/61C4MWlKzUL._SL1500_.jpg",
    aboutProduct: "Fossil Gen 6 Smartwatch (Brown Leather)",
    price: 24999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹18999.00",
    category: "Wearables"
  },
  {
    img: "https://m.media-amazon.com/images/I/51ti+v1tH4L._SL1000_.jpg",
    aboutProduct: "Adidas Ultraboost 24 Running Shoes",
    price: 18999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹12999.00",
    category: "Fashion"
  },
  {
    img: "https://m.media-amazon.com/images/I/81bAwX5GQDL._SL1500_.jpg",
    aboutProduct: "Apple iPad Air M2 (2025) Wi-Fi 128GB",
    price: 68999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹51999.00",
    category: "Tablets"
  },
  {
    img: "https://m.media-amazon.com/images/I/51eQFvJ+f9L._SL1000_.jpg",
    aboutProduct: "Philips Air Fryer HD9252/90 – Rapid Air Technology",
    price: 10999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹7999.00",
    category: "Kitchen"
  },
  {
    img: "https://m.media-amazon.com/images/I/71pAgZArA1L._SL1500_.jpg",
    aboutProduct: "Logitech MX Master 3S Wireless Mouse",
    price: 10999.00,
    timer: "00:00:00",
    button: "Closed",
    para: "₹8499.00",
    category: "Accessories"
  }

    ]
   
     const [selectedCategory, setSelectedCategory] = useState('All');
      const[currentPage , setCurrentPage] = useState(1);
       
     useEffect(()=>{
        setCurrentPage(1);
     }, [selectedCategory])

    const filteredProducts =
  selectedCategory === "All"
    ? Products
    : Products.filter((prod) => prod.category === selectedCategory);

   
    const itemsPerPage =8;
    const totalPages = Math.ceil(Products.length / itemsPerPage);
   
    const lastofIndex = currentPage* itemsPerPage;
    const firstofIndex = lastofIndex-itemsPerPage;
    const currentItems = filteredProducts.slice(firstofIndex, lastofIndex);
 


    const filterCategories = [...new Set(Products.map((prod)=>prod.category))];
     console.log(filterCategories);
    


   



    
     
  return (
         <div className='overflow-x-hidden md:overflow-x-visible w-sm md:w-auto' >
                <MostHeader />
                <Carousel />



            <div className='  flex items-center justify-between p-8 md:p-10      h-10 md:h-20 w-sm md:w-full'>
                <div className='w-auto h-10 md:h-20 flex justify-start flex-col gap-y-1 md:gap-y-2'>
                    <h2 className=' text-lg font-bold  md:text-3xl md:font-semibold'>
                        All Products
                    </h2>
                    <div className=' h-0.5 md:h-1 bg-orange-500 w-18 md:w-24 rounded-2xl flex items-center pl-3   '>
                            <div className=' h-0.5 md:h-1 bg-white rounded-2xl  opacity-80   w-8 md:w-10 '>

                            </div>
                    </div>
                </div>
                <div className=' md:w-auto  h-8 md:h-10 flex items-center justify-end cursor-pointer  ' >
                    <button className='bg-orange-400 rounded px-3 flex items-center justify-center text-white font-semibold text-sm  md:text-lg  cursor-pointer hover:bg-black relative hover:scale-102   hover:-translate-0.5  ' >  <CiGrid42  className='font-bold tracking-tight  ' />Categories 
                                <select
                                value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                                className=' w-5 flex items-center justify-center text-black appearance-none border-none outline-none  px-3 py-2 cursor-pointer ' >
                                    
                                    <option value="All">All</option>
                                   
                                        {
                                            filterCategories.map((category,idx)=>{
                                                return(
                                                    <option
                                                     key={idx}
                                                    value={category}>
                                                     {category}
                                                    </option>
                                                )
                                            })
                                        }
                                    
                                 
                                
                                </select>

                            {/* absoluate icon */}
                            <FaSortDown
                                    className="absolute right-3 md:right-2 top-1/2  transform -translate-y-1/2  text-white cursor-pointer text-base md:text-xl  "
                                     
                                />
                    </button>

                </div>
            </div>





             <div className=' w-sm  md:w-full h-auto   flex  flex-wrap md:items-center md:justify-evenly'> 
                {
                    currentItems.map(( prod,idx)=>(
                             <Cards 
                                key={idx}
                                img={prod.img}
                                about = {prod.aboutProduct}
                                price = {prod.price}
                                timer={prod.timer } 
                                btn={prod.button} 
                                para = {prod.para}
                             />
                    ))
                }
             
            </div>
            <div className=' h-10 w-95 md:w-full flex items-center justify-center mb-5 mt-5   ' >
                   <button
                        onClick={() => {
                            if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                            }
                        }}
                        disabled={currentPage === 1} 
                        className={`flex items-center justify-center border h-8 w-15 rounded-lg mr-2
                            ${
                            currentPage === 1
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "text-blue border-blue-600 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
                            }`}
                        >
                        Prev
                    </button>

                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                            onClick={() => {
                                if (currentPage < totalPages) {
                                setCurrentPage(currentPage + 1);
                                }
                            }}
                            disabled={currentPage === totalPages} 
                            className={`flex items-center justify-center border h-8 w-15 rounded-lg ml-2
                                ${
                                currentPage === totalPages
                                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                    : "text-blue border-blue-600 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
                                }`}
                            >
                            Next
                    </button>

            </div>











            
                {/* About Section */}


            <div className='   h-auto w-sm p-2 md:w-full   '>
                <h4 className=' text-xl md:text-3xl flex items-center justify-center font-semibold flex-col '>
                    How It Works
                     <div className=' h-0.5 md:h-1  bg-orange-500 w-20 md:w-24 rounded-2xl flex items-center pl-8 md:pl-10 mt-1 '>
                            <div className=' h-0.5 md:h-1 bg-white rounded-2xl  opacity-80    w-7 md:w-8 '>

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
 
                <div className=' h-auto md:h-96 w-full mt-5 pl-10  md:pl-15 pt-2 pr-2  ' >
                    <h2 className='capitalize text-xl md:text-2xl font-bold md:font-semibold opacity-90  '>
                        About us
                    </h2>
                    
                   <div className=' md:flex items-start md:justify-evenly h-full w-full md:gap-x-2 gap-y-2'>
                  
                        <p className=' flex items-start tracking- justify-center flex-col text-lg mt-2' >
                                Bid For Deal is the world's premier “fair & honest” bidding site founded in 2020. We’ve delivered millions of brand-new products to satisfied customers across the Europe. Our mission is simple:
                                <span className="list-disc pl-8 mt-2 ">
                                 
                                    <li>Make shopping exciting, fun, and affordable.</li>
                                    <li>Provide only brand-new items, shipped free, with warranties.</li>
                                    <li>Create a fair bidding environment with transparency and customer protection.</li>
                                </span>
                         <button className='capitalize bg-orange-400 flex  items-center justify-center h-10 w-28 md:w-32 md:ml-3 cursor-pointer rounded-lg mt-3 text-white font-bold'>
                            read more
                         </button>
                         </p>
                         <img src="/aboutImg.png" alt="aboutImg" className=' h-70 object-cover md:h-84 md:w-full w-sm ' />
                         
                   </div>
                </div>

            {/* colorfulCard */}


                <div className="md:w-240 md:h-96 mt-8 ml-15 mr-8  rounded-2xl shadow-lg text-center px-6 py-10 bg-gradient-to-b from-orange-400 to-indigo-950 text-white">
                             
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
             
                <div className=' h-auto md:h-screen md:w-full md:items-center  pt-5   w-sm     '>
                    <h2 className='text-base md:text-2xl font-semibold capitalize flex items-center justify-center flex-col '>
                        frequently asked Questions
                         <div className='h-0.5 md:h-1 bg-orange-500 md:w-24 w-20 rounded-2xl flex items-center pl-8 md:pl-10 mt-2 '>
                            <div className=' h-0.5 md:h-1 bg-white rounded-2xl  opacity-80   w-7 md:w-8 '>

                            </div>
                        </div>
                    </h2>
                     <div className=' grid md:flex  md:items-center justify-start md:justify-evenly mt-3 md:m-8 md:pt-3   h-full w-md md:w-240'>
                        <img src="/query.jpg" alt="queryImg" className=' h-80 w-auto md:h-full md:w-1/2 ' />
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

                <div className='h-screen w-sm md:w-full mt-10 md:mt-25 grid  md:flex items-center justify-center   md:flex-col border-t  border-slate-200 rounded-2xl'>
                    
                                    <Footer/>
                                    
                                     
                </div>
                
                               
            </div>

            
        </div>
    )
}

export default App;