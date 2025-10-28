import React from 'react'

const AboutCard = ({id,heading,para}) => {
  return (
    <div className='  border border-slate-300 md:h-60 h-64  md:w-52 w-54 mb-5 ml-5 flex flex-col items-center justify-evenly rounded-2xl rounded-br-[6vw]  pb-5 overflow-x-auto p-2 '> 
             <div className=' bg-orange-500  flex items-center justify-center text-xl md:text-2xl font-semibold text-white rounded h-8 w-8 md:h-10 md:w-10  '>
               {id}
             </div>
             <h3 className=' text-md md:text-lg font-bold md:font-semibold h-8 w-full flex items-center justify-center ' >
                {heading}
             </h3>
             <p className=' flex items-center  h-1/2 md:w-40 w-42 md:pt-1 pt-0.5   '>
                {para}
             </p>
    </div>
  )
}

export default AboutCard;