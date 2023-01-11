import React from 'react'

const ExpenseBar = ({label,value,colored=false}:{label:string,value:number,colored?:boolean}) => {
  return (
    <div className='flex flex-col justify-center center items-center'>
        <h5 className='text-sm'>{label}</h5>
        <h1 className={`text-4xl font-bold ${colored?value<0?'text-negative':'text-positive':''}`}>{value}</h1>
    </div>
  )
}

export default ExpenseBar