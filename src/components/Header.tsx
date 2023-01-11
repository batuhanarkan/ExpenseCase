import React from 'react'

const Header = () => {
  return (
    <nav className='w-full h-auto p-2 fixed flex flex-row justify-end top-0 left-0 right-0 text-white underline gap-2 text-xs'>
        <a>Home</a>
        <a>Statistics</a>
        <a>All Expenses</a>
    </nav>
  )
}

export default Header