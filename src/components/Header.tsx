import React from 'react'

const Header = () => {
  return (
    <nav className='w-full h-auto p-2 fixed flex flex-row justify-end top-0 left-0 right-0 text-white underline gap-2 text-xs'>
        <div>Home</div>
        <div>Statistics</div>
        <div>All Expenses</div>
    </nav>
  )
}

export default Header