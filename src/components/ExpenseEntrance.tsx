import React from 'react'
import Input from './Input'
import InputWrapper from './InputWrapper'

const ExpenseEntrance = () => {
    return (
        <div className='w-full h-full bg-add-panel flex flex-col items-start justify-center p-10  md:p-24 gap-4'>
            <h1 className='text-white font-semibold text-3xl'>Simplified Budget</h1>
            <Input label='Budget Amount'/>
            <div className='flex flex-row w-full space-x-1 mt-10'>
            <Input label='Expense' />
            <Input label='Amount'/>
            <Input label='Date'/>
            <button className='text-4xl text-positive'>+</button>
            </div>
        </div>
    )
}

export default ExpenseEntrance