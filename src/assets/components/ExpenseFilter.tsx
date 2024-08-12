import React, { ChangeEvent } from 'react'

interface Props{
  onSelect:(category:string) => void
}

const ExpenseFilter = ({onSelect}: Props) => {
  return (
    <div>
      <select className='form-select' aria-label='Default select example' onChange={(event)=>onSelect(event.target.value)}>
        <option selected value=''>Choose Category</option>
        <option value='food'>food</option>
        <option value='clothes'>clothes</option>
        <option value='entertainment'>entertainment</option>
      </select>
    </div>
  )
}

export default ExpenseFilter
