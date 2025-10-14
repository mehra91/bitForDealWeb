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
   
            <div className='h-98 w-1/5 bg-white rounded-lg m-5 p-2 pb-4 px-4 flex flex-col items-center shadow-xl/30  shadow-[0_0_12px_rgba(0,0,0,0.3)] hover:scale-102 ' >
                         <img src={img}  className='rounded-md h-40 w-full  object-cover' /> 
                        <p className='text-base font-bold  w-full h-20 flex items-center justify-center text-center '>
                           {about}
                        </p>
                        <h5 className='text-lg font-bold   w-full h-7 flex items-center justify-center' >
                            ₹{formattedPrice}
                        </h5>
                        <div className='   w-full h-7 flex items-center justify-center    '>
                            <span className='text-2xl font-semibold text-red-600' >
                               {timer}
                            </span>
                        </div>
                        <button className=' bg-red-600 mb-1 uppercase h-auto w-full p-1 rounded-md flex items-center justify-center text-2xl font-stretch-extra-expanded font-semibold text-white'>
                            {btn}
                           
                        </button>
                        <small className='text-base font-normal'>
                            Buy it now: {para}
                        </small>

            </div>
    
  )
}

export default Cards