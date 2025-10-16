import {useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";


const QuesCard = ({Ques,Ans}) => {
    const[isActive, setIsActive] = useState(false);
  return (

        <>
             
                   
                        <div className='h-full w-1/2 flex items-center justify-evenly flex-col   mt-1 pt-2'>
                            <button onClick={()=>
                                setIsActive(!isActive)
                                } 
                               className={`h-15 w-110 flex items-center justify-between text-lg p-1 rounded-t-lg rounded-b-3xl border border-indigo-200/80 hover:border-indigo-300 transition-all duration-200 focus-within::border-4 focus-within:ring-indigo-200
                                    ${isActive 
                                    ? " bg-orange-500 border border-indigo-100/80" 
                                    : "bg-white border-2 border-indigo-100 "
                                    }`}>
                                   {Ques}
                                    <span
                                    className={`transform transition-transform duration-300 ${
                                            isActive ? "-rotate-180" : "rotate-0"
                                            }`}
                                    >
                                       <IoIosArrowDown size={25} className='opacity-50  ' />
                                    </span>
                            </button>
                                {isActive && (
                                   
                                    <p className='h-20 w-100  flex items-center justify-start tracking-tight  text-lg p-2 '>
                                       {Ans}
                                    </p>
                                     
                                )}
                            
                        </div>
                    {/* </div> */}
        </>
  )
}

export default QuesCard