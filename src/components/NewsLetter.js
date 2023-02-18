import React from 'react'

export const NewsLetter = () => {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                <div className='m-5'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want a Complete Transformaion?</h1>
                    <span className='text-white'>
                        Sign up to our newsletter and stay up to date.
                    </span>
                </div>
                <div className='m-5'>
                    <input type="text" className='p-3 rounded mr-2 text-slate' placeholder='Email' />
                    <button className='bg-black  text-white rounded p-3'>Notify Me</button>
                    <p className='text-white mt-5'>
                        We care about your fitness and give you transformation.Read our  <br />
                        <a href="">Privacy Policy</a>
                    </p>
                </div>

            </div>
        </div>
    )
}
