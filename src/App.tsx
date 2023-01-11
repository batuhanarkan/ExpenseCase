import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExpenseEntrance from './components/ExpenseEntrance'
import ExpenseList from './components/ExpenseList'
import Header from './components/Header'
import ExpenseBar from './components/ExpenseBar'
import ExpenseProvider, { useExpense } from './providers/ExpenseProvider'

function App() {
  const [count, setCount] = useState(0)
  const test = useExpense()
  return (
    
      <div className="absolute inset-0 grid grid-cols-2">
        <Header />
        <ExpenseEntrance />
        <ExpenseList />
        <div className='col-span-2 grid grid-cols-3 bg-white h-auto'>
        <ExpenseBar label="Income" value={test.income} />
        <ExpenseBar label="Expense" value={-test.expense}/>
        <ExpenseBar label="Balance" colored={true} value={test.balance}/>
        </div>
      </div>
    

  )
}

export default App
