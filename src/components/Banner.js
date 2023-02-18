import React from 'react'
import Typed from 'react-typed';

export const Banner = () => {
    return (
        <div className='bg-[#2699fb] w-full py-[80px]'>
            <div className='max-w-[1240px] mx-auto text-center py-[50px] md:py-[100px] font-bold'>
                <div className='font-bold text-4xl md:text-5xl py-[50px] md:p-[24px]'>
                    <Typed
                        className='pl-3'
                        strings={['Welcome to HS Nutrition.']}
                        typeSpeed={120}
                        loop={true}
                        backSpeed={40}
                    />
                </div>
                <div className='text-white text-4xl md:text-[80px] md:p-[24px] text-[40px]'>Connect with us.</div>
                <div className='text-[20px] text-4xl md:text-[50px] text-white md:p-[24px]'>
                    Get
                    <Typed
                        className='pl-3 my-[50px] md:my-[50px]'
                        strings={['Customise Nutrition Plan', 'Workout Plan', 'Complete Transformation.']}
                        typeSpeed={120}
                        loop={true}
                        backSpeed={40}
                    />
                </div>
                <button className='bg-black   text-white rounded p-3'>Get Started</button>
            </div>

        </div>
    )
}
