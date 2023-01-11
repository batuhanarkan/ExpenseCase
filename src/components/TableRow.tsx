import React from 'react'
import { IconTrash } from '@tabler/icons'
import { useExpense } from '../providers/ExpenseProvider'

const TableRow = ({expense,amount,id}:{expense:string,amount:number,id:number}) => {
    const {data,setData} = useExpense()

  return (
    <tr className='border-b border-b-label-gray '>
      <td className='py-4'>{expense}</td>
      <td>{amount}</td>
      <td onClick={
        () => {
            setData(data.filter(e => e.id !== id))
        }
      }><IconTrash size={24}/></td>
    </tr>
  )
}

export default TableRow