import React, {useState} from 'react';
import NewExpense from "./components/CreatingNewExpenseInput/NewExpense";
import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";


const App = ()  => {
  // Imperative approach of JSX code in Basic JS
  /* 
  const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById('root').append(para);
  */

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      label: 7
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), label: 2  },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      label: 2
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      label: 5
    },
  ];

  const [expenses, addToExpensesArr] = useState(DUMMY_EXPENSES);
  //const [filteredExpenses, filterArr] = useState(expenses);
  const addToExpensesArrOfObjectsHandler = (addToExpenseArrSingleObj) =>
  {

    // His simple way of adding new data to existing data which uses ... operator and previous data
      //prevExpenses is the data from the dummy_expenses array - adds single array obj and still has previous data
      //expenses.forEach(element => console.log(element));
      //console.log(expenses1);
      console.log(addToExpenseArrSingleObj);
    addToExpensesArr((prevExpenses) => {
      return [addToExpenseArrSingleObj, ...prevExpenses];
    });

    // Hard Way I did - Logic is incorrect, no need to try and create some new array, just use previous Data 
    // const newExpenseObj =
    // {
    //   ...addToExpenseArrSingleObj
    // }
    // //console.log(newExpenseObj);
    // DUMMY_EXPENSES.push(newExpenseObj);
    // addToExpensesArr(DUMMY_EXPENSES);
    // //console.log(expensesArr);
    // console.log(expenses);
  };

  // const [expenses1, filterExpenseArr] = useState(expenses);
  // const filterExpenseArrHandler = (yearToFilterBy) => {
  //   console.log(yearToFilterBy);
  //   filterExpenseArr(expenses1.filter((element) => element.date.toLocaleString('en-US', {year:'numeric'}) === yearToFilterBy));
  //   console.log(expenses1);
  // }
  return (
    // This is JSX which was created by the react team, HTML code inside of JS
    // change the code in public/index.html, transformed in the browser using the main.chunk.js
    <div>
      <NewExpense onAddExpense = {addToExpensesArrOfObjectsHandler}/>
      <ExpenseDisplay items={expenses}/>
    </div>

    // Semi behind the scene code of React, import React from 'react'
      // return React.createElement('div', {}, Expenses Component - React.createElement(Expenses, {expenses: expenses}) )
        // after the second comma is only what's in the element which could be an infinite number of things and all would have to have React.createElement()
  );
}

export default App;
