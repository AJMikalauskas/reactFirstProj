import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // This is the singular and more common way react projects keep track of multiple states
        //The first value in this array is what stores the value of the state
            // The second value in this array is a small function that changes the state and value of the first array value 
    const [titleStartVal, setTitleToInput] = useState('');
    const [amtStartVal, setAmtToInput] = useState('');
    const [dateStartVal, setDateToInput] = useState('');


        // Singular trackers with different function for each and individual useState, not based on a whole object containing the states of each individual
        const trackTitleInputHandler = (event) => {
            setTitleToInput(event.target.value);
            // console.log(titleStartVal);
            // console.log(setTitleToInput);
            console.log(event.target.value);
        }
    
        const trackAmountInputHandler = (event) => {
            setAmtToInput(Number(event.target.value));
            // console.log(titleStartVal);
            console.log(event.target.value);
        }
    
        const trackDateInputHandler = (event) => {
            setDateToInput(event.target.value);
            // console.log(titleStartVal);
            console.log(event.target.value);
        }

        const submitStoreDataHandler = (event) => {
            // This stops the page from reloading since normally when a form is submitted, it reloads the page while sending the request  
            event.preventDefault();
            
            const addExpenseData = {
                title: titleStartVal,
                amount : amtStartVal,
                date: new Date(dateStartVal)
            }
            props.onSaveExpenseData(addExpenseData);
            // These 3 methods are only possibel due to the two way binding by adding the value property to the input tags
            setTitleToInput('');
            setAmtToInput('');
            setDateToInput('');
        }
        // const resetFormHandler = () => {
        //     addExpense =    
        //       <form onSubmit={submitStoreDataHandler}>
        //         <div className="new-expense__controls">
        //           <div className="new-expense__control">
        //             <label>Title</label>
        //             {/* For Two Way Binding, add value="titleStartVal" */}
        //             <input type="text" value={titleStartVal} onChange={trackTitleInputHandler}/>
        //           </div>
        //           <div className="new-expense__control">
        //             <label>Amount</label>
        //             {/* For Two Way Binding, add value="amtStartVal" */}
        //             <input type="number" min="0.01" step="0.01" value={amtStartVal} onChange={trackAmountInputHandler}/>
        //           </div>
        //           <div className="new-expense__control">
        //             <label>Date</label>
        //             {/* For Two Way Binding, add value="dateStartVal" */}
        //             <input type="date" min="2019-01-01" max="2022-12-31" value={dateStartVal} onChange={trackDateInputHandler}/>
        //           </div>
        //         </div>
        //         <div className="new-expense__actions">
        //         <button >Cancel</button>
        //           <button type="submit">Add Expense</button>
        //         </div>
        //       </form>;
        // }

        //let addExpense = <button onClick={showFormHandler}>Add Expense</button>
    // Object based whole and less common way react projects keep track of multiple states
        // Not currently good practice in each method below with just ...userInput, enteredTitle/Amt/Date : event.target.value
            // Deletes the previous states by setting them to null - console.log should return both the amt and title if both values have changed, 
                //instead it only shows the amt or the title. use prevState anonymous function keep track of the past changes
                    // he ends up switching back to the singular state tracking shown above
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmt: '',
    //     enteredDate: ''
    // })

    // const titleChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle : event.target.value
    //     // });
    //     setUserInput((prevState) => {
    //         console.log(prevState);
    //         return {...prevState, enteredTitle: event.target.value}
    //     })
    // };

    // const amtChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmt : event.target.value
    //     // });
    //     setUserInput((prevState) => {
    //         console.log(prevState);
    //         return {...prevState, enteredAmt: event.target.value}
    //     })
    //     //console.log(event.target.value);
    // };

    // const dateChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate : event.target.value
    //     // });
    //     setUserInput((prevState) => {
    //         console.log(prevState);
    //         return {...prevState, enteredDate: event.target.value}
    //     })
    //     //console.log(event.target.value);
    // };

    return (
      <form onSubmit={submitStoreDataHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            {/* For Two Way Binding, add value="titleStartVal" */}
            <input type="text" value={titleStartVal} onChange={trackTitleInputHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            {/* For Two Way Binding, add value="amtStartVal" */}
            <input type="number" min="0.01" step="0.01" value={amtStartVal} onChange={trackAmountInputHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            {/* For Two Way Binding, add value="dateStartVal" */}
            <input type="date" min="2019-01-01" max="2022-12-31" value={dateStartVal} onChange={trackDateInputHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
        <button type='button' onClick={props.turnFormOff}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}

export default ExpenseForm; 