import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import "./ExpenseSection.css"

function ExpenseSection() {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  )
}

export default ExpenseSection