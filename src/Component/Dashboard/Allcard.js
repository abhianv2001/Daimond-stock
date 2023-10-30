import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { apiContext } from '../../context/ApiState';


function Allcard() {
    const { typeCount, fetchData } = useContext(apiContext)

    return (
        <>
            <section class="allcard-outer flex justify-start">
                <div class="all-card-item relative  p-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-md overflow-hidden z-[-1]">
                    <div class="title relative z-10 text-green-200 leading-none  font-semibold mb-[50px] uppercase ">Natutral</div>
                    <div class="number relative z-10 mb-4 text-white text-[20px] leading-none font-semibold text-right">0</div>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-green-600 opacity-50">

                    </svg>
                </div>

                <Link to="/daimondcard"  className='all-card-item'>
                    <div class="relative  p-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-md overflow-hidden z-[-1]" >
                        <div class="title relative z-10 text-blue-200 leading-none font-semibold mb-[50px] uppercase">CVD</div>
                        <div class="number relative z-10 mb-4 text-white text-[20px] leading-none font-semibold text-right">
                            {typeCount}
                        </div>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-blue-700 opacity-50">
                        </svg>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Allcard;
