import React from 'react'
import { useExpense } from '../providers/ExpenseProvider'
import TableRow from './TableRow'


const Table = () => {
    const {data} = useExpense()
  return (
    <table className="table-auto text-white w-full text-xs">
  <tbody>
  {data.map(expense => <TableRow amount={expense.amount} expense={expense.expense} id={expense.id} />)}
  </tbody>
</table>
  )
}

export default Table