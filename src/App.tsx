import { ChangeEvent, useState } from 'react'
import ExpenseList from './assets/components/ExpenseList'
import ExpenseFilter from './assets/components/ExpenseFilter'


function App() {
  const [expenses, setExpenses] = useState([
    {id:1, description:'Milk', amount:5, category:'food'},
    {id:2, description:'uniqlo', amount:25, category:'clothes'},
    {id:3, description:'Ramen', amount:15, category:'food'}
  ])
  const onDelete = (id:number) => {
    console.log(id)
  }

  const onSelect = (category:string) => { 
    console.log(category)
  }
  return (
    <div className="App">
      <div className='mb-3'>
        <ExpenseFilter onSelect={onSelect} />
      </div>
      <ExpenseList expenses={expenses} onDelete={onDelete} />
    </div>
  )
}

export default App
