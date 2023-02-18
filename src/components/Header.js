import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-[#083243] p-4'>
            <div className='max-w-[1240px]  mx-auto  flex justify-between text-white items-center py-5 '>
                <div className='text-3xl font-bold'>
                    HS Nutrition
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl md:hidden block' />
                }
                <ul className='hidden md:flex flex gap-10 '>
                    <li>
                        Home
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {/*Responsive menu */}
                <ul className={`duration-300 md:hidden w-full h-screen fixed text-white bg-blue-800  top-[107px]
                ${toggle ? 'left-[0]' : 'left-[-100%]'}
                `}>
                    <li className='p-3'>
                        Home
                    </li>
                    <li className='p-3'>
                        Company
                    </li>
                    <li className='p-3'>
                        Resources
                    </li>
                    <li className='p-3'>
                        About
                    </li>
                    <li className='p-3'>
                        Contact
                    </li>
                </ul>
            </div>
        </div>

    )
}

