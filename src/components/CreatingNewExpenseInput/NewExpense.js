import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

let numId = 5;
const NewExpense = (props) => {
    const [showingForm, changeWhetherFormShowing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: "e" + numId.toString(),
            ...enteredExpenseData
        };
        numId++;
        console.log(expenseData)
        props.onAddExpense(expenseData);
        turnOffFormHandler();
        //console.log(expenseData);
    };

    const showFormHandler = () =>
    {
        changeWhetherFormShowing(true);
    }

    const turnOffFormHandler = () =>
    {
        changeWhetherFormShowing(false);
    }
    return (
        <div className='new-expense'>
            {showingForm === false && <button onClick={showFormHandler}> Add New Expense</button>}
            {showingForm === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} turnFormOff={turnOffFormHandler}/>}
        </div>
    )
}

export default NewExpense;