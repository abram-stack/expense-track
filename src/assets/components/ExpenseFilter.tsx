import React, { ChangeEvent } from 'react'
import categories from '../../categories'

interface Props{
  onSelect:(category:string) => void
}

const ExpenseFilter = ({onSelect}: Props) => {
  return (
    <div>
      <select className='form-select' aria-label='select category' onChange={(event)=>onSelect(event.target.value)}>
        <option selected value=''>Choose Category</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ExpenseFilter
