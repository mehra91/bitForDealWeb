import React from 'react'

const Cards = () => {
  return (
   
            <div className='h-auto w-1/5 bg-white rounded-lg m-5 p-2 pb-4 px-4 flex flex-col items-center shadow-xl/30  shadow-[0_0_12px_rgba(0,0,0,0.3)]' >
                        <img src="../public/faceCream.jpeg" alt="FaceCream" className='rounded-md h-45 w-full  object-cover' />
                        <p className='text-base font-bold   text-center '>
                            Set of 3 - Grown Alchemist - Polishing Facial Exfo...
                        </p>
                        <h5 className='text-lg font-bold ' >
                            ₹0.00
                        </h5>
                        <div className=' flex items-center justify-center  w-full h-auto mb-1 '>
                            <span className='text-2xl font-semibold text-red-600' >
                                00:00:00
                            </span>
                        </div>
                        <button className='bg-red-600 mb-1 uppercase h-auto w-full p-1 rounded-md flex items-center justify-center text-2xl font-stretch-extra-expanded font-semibold text-white' >
                            Closed
                        </button>
                        <small className='text-base font-normal'>
                            Buy it now: ₹59.00
                        </small>

            </div>
    
  )
}

export default Cards