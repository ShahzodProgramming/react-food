import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-amber-300 p-5'>
        <Link to={'/'} className='text-white text-3xl font-bold'>React shop</Link>
    </div>
  )
}

export default Navbar