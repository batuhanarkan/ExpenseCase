import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExpenseEntrance from './components/ExpenseEntrance'
import ExpenseList from './components/ExpenseList'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute inset-0 grid grid-cols-2">
      <Header />
     <ExpenseEntrance />
     <ExpenseList />
    </div>
  )
}

export default App
