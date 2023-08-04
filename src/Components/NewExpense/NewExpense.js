import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props)=> {

    const firstParentData = (data)=>{

        let ExpenseData = {
            ...data,
            id:(Math.random()*10).toString()
        }
          
            props.onSecondParentData(ExpenseData);
            console.log(ExpenseData);
    }

    return (
       <div className='new-expense'>
       <ExpenseForm onFirstParentData={firstParentData}/>
       </div>
    )
}

export default NewExpense