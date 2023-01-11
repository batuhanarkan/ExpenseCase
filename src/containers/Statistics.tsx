import React from 'react'
import { useExpense } from '../providers/ExpenseProvider'
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const Statistics = () => {
  const { data } = useExpense()
  return (
    <div className='absolute bg-white inset-0 flex items-center justify-center '>
      <div className='w-3/5 h-2/4'>
        <LineChart width={730} height={250} data={
          data
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .reduce((acc, e) => {
            const last = acc[acc.length - 1]
            if (last && last.date === e.date) {
              last.amount += e.amount
            } else {
              acc.push({ date: e.date, amount: e.amount })
            }
            return acc
          },[] as { date: string, amount: number }[])
          .map(e => ({ name: e.date, uv: e.amount, pv: 2400, amt: 2400 }))}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>

    </div>
  )
}

export default Statistics



