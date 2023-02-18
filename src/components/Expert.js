import React from 'react'
import Nutrition from "../Pictures/Nutrition.jpg"

export const Expert = () => {
    return (
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2 mt-[20]'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={Nutrition} alt="" className='inline' />
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold text-lg my-2'> LEARN FROM EXPERT</h1>
                <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis eaque aliquid. Ipsam consequuntur soluta quo minus accusamus, doloremque voluptate culpa corrupti non?</p>
                <button className='bg-black w-[30%] p-3 text-white rounded'>Get Started</button>

            </div>
        </div>
    )
}
