import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between  text-white py-2 bg-indigo-950'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className="flex gap-10 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Your Tasks</li>
        </ul>
    </nav>
  )
}
