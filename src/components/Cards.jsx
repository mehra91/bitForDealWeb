import React from 'react'

const Cards = ({img,about,price,timer,btn,para}) => {
    // const changeBtnColor = (btn)=>{
    //     switch(btn.toLowerCase()){
    //         case "sold":
    //             return "bg-gray-500";
    //         default :
    //             return "bg-red-600";


    //         }
    // }
    const formattedPrice = Number(price).toLocaleString('en-IN',{
         minimumFractionDigits: 2,
         maximumFractionDigits: 2,
    }
);
  return (
   
            <div className='h:96 md:h-94 w-38 md:w-45 bg-white rounded-lg m-5 p-2 pb-4 px-2 flex flex-col items-center shadow-xl/30  shadow-[0_0_12px_rgba(0,0,0,0.3)] hover:scale-101 ' >
                         <img src={img}  className='rounded-md h-30 md:h-40 w-full  object-cover' /> 
                        <p className='text-sm md:text-base font-bold  w-full h-15 md:h-20 flex items-center justify-center text-center '>
                           {about}
                        </p>
                        <h5 className=' text-base md:text-lg font-bold mb-1  w-full h-5 md:h-7 flex items-center justify-center' >
                            ₹{formattedPrice}
                        </h5>
                        <div className='   w-full h-5 md:h-7 flex items-center justify-center    '>
                            <span className=' text-lg md:text-2xl font-semibold text-red-600' >
                               {timer}
                            </span>
                        </div>
                        <button className=' bg-red-600 mb-1 uppercase h-auto w-30 md:w-40 p-1 rounded-md flex items-center justify-center text-base md:text-lg font-stretch-extra-expanded font-semibold text-white'>
                            {btn}
                           
                        </button>
                        <small className='text-xs md:text-base font-normal flex items-center justify-center'>
                            Buy it now: {para}
                        </small>

            </div>
    
  )
}

export default Cards