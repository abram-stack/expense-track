import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import categories from '../../categories';

interface Props{
  onSubmit: (data:FormData) => void
}

// interface FormData{
//   description: string;
//   amount: number;
// }
const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters long' }),
  amount: z.number({ invalid_type_error: 'Amount is required' }).min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: ()=> ({message: 'Category is required'})
  })
})

type FormData = z.infer<typeof schema>

const ExpenseForm = ({onSubmit}:Props) => {

  //with register useForm, no longer need state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  // const onSubmit = (data: FieldValues) => {
  //   console.log(data)
  // }

  return (
    <div>
      <form onSubmit={handleSubmit((data) => { 
        reset(),
        onSubmit(data)
      })}>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            {...register('description')}
            //onChange,value
            id='description'
            type='text'
            className='form-control'
          />
          {errors.description && (
            <p className='text-danger'>{errors.description.message}</p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            {...register('amount', { valueAsNumber: true })}
            id='amount'
            type='number'
            className='form-control'
            min={0}
          />
          {errors.amount && (
            <p className='text-danger'>{errors.amount.message}</p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>Category</label>
          <select
            {...register('category')}
            id='category'
            className='form-select'
            aria-label='select category'>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button disabled={!isValid } className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm
