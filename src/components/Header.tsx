import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='w-full h-auto p-2 fixed z-50 flex flex-row justify-end top-0 left-0 right-0 text-white underline gap-2 text-xs'>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/">All Expenses</Link>
    </nav>
  )
}

export default Header