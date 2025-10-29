import {useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";


const QuesCard = ({Ques,Ans}) => {
    const[isActive, setIsActive] = useState(false);
  return (

        <>
             
                   
                        <div className='h-full  w-sm md:w-1/2 flex items-center justify-evenly flex-col   mt-1 md:pt-2'>
                            <button onClick={()=>
                                setIsActive(!isActive)
                                } 
                               className={`h-13 md:h-15 w-85 md:w-110 flex items-center justify-between text-base md:text-lg p-1 rounded-t-lg rounded-b-2xl md:rounded-b-3xl border border-indigo-200/80 hover:border-indigo-300 transition-all duration-200 focus-within::border-4 focus-within:ring-indigo-200
                                    ${isActive 
                                    ? " bg-orange-500 border border-indigo-100/80" 
                                    : "bg-white border-1 md:border-2 border-indigo-100 "
                                    }`}>
                                   {Ques}
                                    <span
                                    className={`transform transition-transform duration-300 ${
                                            isActive ? "-rotate-180" : "rotate-0"
                                            }`}
                                    >
                                       <IoIosArrowDown   className='opacity-50 text-lg md:text-2xl  ' />
                                    </span>
                            </button>
                                {isActive && (
                                   
                                    <p className='h:10 md:h-20 w-100  flex items-center justify-start tracking-tighter md:tracking-tight text-base md:text-lg pl-10 md:pl-3 p-2 md:p-2 '>
                                       {Ans}
                                    </p>
                                     
                                )}
                            
                        </div>
                     
        </>
  )
}

export default QuesCard