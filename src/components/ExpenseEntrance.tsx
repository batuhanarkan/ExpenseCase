import React, { useState } from 'react'
import { useExpense } from '../providers/ExpenseProvider'
import Date from './Date'
import Input from './Input'
import InputWrapper from './InputWrapper'
import NumberInput from './NumberInput'

const ExpenseEntrance = () => {
    const [budget, setBudget] = useState('');
    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const { setData, data } = useExpense()
    return (
        <div className='w-full h-full bg-add-panel flex flex-col items-start justify-center p-10  md:p-24 gap-4'>
            <h1 className='text-white font-semibold text-3xl'>Simplified Budget</h1>
            <NumberInput label='Budget Amount' value={budget} setValue={setBudget} />
            <div className='flex flex-row w-full space-x-1 mt-10'>
                <Input label='Expense' value={expense} setValue={setExpense} />
                <NumberInput label='Amount' value={amount} setValue={setAmount} />
                <Date value={date} setDate={setDate} label='Date' />
                <button className='text-4xl text-positive' onClick={() => {
                    setData(prev => [...prev, { expense, budget: parseInt(budget), amount: parseInt(amount), date, id: Math.floor(Math.random() * 100) }])
                    setBudget('')
                    setExpense('')
                    setAmount('')
                    setDate('')
                }}>+</button>
            </div>
        </div>
    )
}

export default ExpenseEntrance