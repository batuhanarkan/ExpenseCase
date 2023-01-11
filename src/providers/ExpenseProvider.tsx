import React, { Dispatch, SetStateAction, useState } from 'react'
const ExpenseContext = React.createContext<{
  balance: number, income: number, expense: number,data:ExpenseType[],setData:Dispatch<SetStateAction<ExpenseType[]>>
}>({ balance: 0, income: 0, expense: 0,data:[],setData:() => {} })
export const useExpense = () => React.useContext(ExpenseContext)
type ExpenseType = { budget: number; expense: string; amount: number; date: string; id:number }
const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ExpenseType[]>([]);
  return (
    <ExpenseContext.Provider value={{
      balance: data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.budget -currentValue.amount, 0
      ),
      income: data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.budget, 0
      ),
      expense: data.reduce(
        (accumulator, currentValue) => accumulator-currentValue.amount, 0
      ),
      data,setData
    }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider