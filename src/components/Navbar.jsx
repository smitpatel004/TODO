import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className='flex justify-between bg-slate-300 py-2 ' >
        <div className='logo' >
            <span className='font-bold text-xl  mx-8 ' >iTask</span>
        </div>
        <ul className='flex gap-5 ' >
            <li className='cursor-pointer hover:font-bold  transition-all ' >Home</li>
            <li className='cursor-pointer hover:font-bold transition-all ' >my task</li>
        </ul>

    </nav>
    </div>
  )
}

export default Navbar
