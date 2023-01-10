import React from 'react'
import Table from './Table'

const ExpenseList = () => {
  return (
    <div className='w-full h-full bg-black flex flex-col items-start justify-center p-10  md:p-24 gap-4'>
         <h1 className='text-positive text-xl'>Expenses</h1>
         <Table />
     </div>
  )
}

export default ExpenseList