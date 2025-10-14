import React from 'react'

const AboutCard = ({id,heading,para}) => {
  return (
    <div className='   border border-slate-300  h-58 w-50  ml-5 flex flex-col items-center justify-evenly rounded-2xl rounded-br-[6vw]  pb-4 overflow-x-auto p-2'> 
             <div className=' bg-orange-500  flex items-center justify-center text-2xl font-semibold text-white rounded h-10 w-10 mt-3 '>
               {id}
             </div>
             <h3 className='text-lg font-semibold h-10 w-full    flex items-center justify-center ' >
                {heading}
             </h3>
             <p className=' flex items-center  h-1/2 w-40   '>
                {para}
             </p>
    </div>
  )
}

export default AboutCard