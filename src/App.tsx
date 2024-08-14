import { ChangeEvent, useState } from 'react'
import ExpenseList from './assets/components/ExpenseList'
import ExpenseFilter from './assets/components/ExpenseFilter'
import ExpenseForm from './assets/components/ExpenseForm'
import { FieldValues } from 'react-hook-form'



function App() {
  const [expenses, setExpenses] = useState([
    {id:1, description:'Milk', amount:5, category:'food'},
    {id:2, description:'uniqlo', amount:25, category:'clothes'},
    {id:3, description:'Ramen', amount:15, category:'food'}
  ])
  const [selectedCategory, setSelectedCategory] = useState('')

  const onDelete = (id: number) => {
    const newExpenses = expenses.filter(expense => expense.id !== id )
    setExpenses(newExpenses)
  }

  const onSelect = (category:string) => { 
    setSelectedCategory(category)
  }

  const viewExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses
  
  return (
    <div className="App">
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, {...expense, id: expenses.length + 1 }])} /> 
      </div>
      <div className='mb-3'>
        <ExpenseFilter onSelect={onSelect} />
      </div>
      <ExpenseList expenses={viewExpenses} onDelete={onDelete} />
    </div>
  )
}

export default App
