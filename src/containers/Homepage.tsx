import React from 'react'
import ExpenseBar from '../components/ExpenseBar'
import ExpenseEntrance from '../components/ExpenseEntrance'
import ExpenseList from '../components/ExpenseList'
import { useExpense } from '../providers/ExpenseProvider'

const Homepage = () => {
  const expense = useExpense()
  console.log(expense.data.map(e => typeof e.date));
  
  return (
    <div className="absolute inset-0 grid grid-cols-2">
      <ExpenseEntrance />
      <ExpenseList />
      <div className='col-span-2 grid grid-cols-3 bg-white h-auto'>
        <ExpenseBar label="Income" value={expense.income} />
        <ExpenseBar label="Expense" value={-expense.expense} />
        <ExpenseBar label="Balance" colored={true} value={expense.balance} />
      </div>
    </div>
  )
}

export default Homepage