import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExpenseEntrance from './components/ExpenseEntrance'
import ExpenseList from './components/ExpenseList'
import Header from './components/Header'
import ExpenseBar from './components/ExpenseBar'
import ExpenseProvider, { useExpense } from './providers/ExpenseProvider'
import { Route, Routes } from 'react-router-dom'
import Root from './containers/Root'
import Statistics from './containers/Statistics'
import Homepage from './containers/Homepage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />}>
        <Route index element={
          <Homepage />
          } />
          <Route path='statistics' element={
            <Statistics/>
          } />

      </Route>
    </Routes>

  )
}

export default App
