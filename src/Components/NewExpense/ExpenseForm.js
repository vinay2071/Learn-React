import React, {useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props)=> {

    let [newTitle,setNewTitle] = useState('')
    let [newAmount,setNewAmount] = useState('')
    let [newDate,setNewDate] = useState('')

    let changeHandlerTitle = (event)=>
    {
        setNewTitle(event.target.value)
    }

    let changeHandlerAmount = (event)=>
    {
        setNewAmount(event.target.value)
    }

    let changeHandlerDate = (event)=>
    {
        setNewDate(event.target.value)
    }

    let submitHandler = (event)=>
    {
        event.preventDefault();

        let ExpenseData = {
            title:newTitle,
            amount:newAmount,
            date: new Date (newDate)
        }

        props.onFirstParentData(ExpenseData)

        console.log(ExpenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
        
    }


    return (
        <form onSubmit = {submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange = {changeHandlerTitle} value={newTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange = {changeHandlerAmount} value={newAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange = {changeHandlerDate}  value={newDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm
