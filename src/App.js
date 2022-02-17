import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";

const App = ()  => {
  // Imperative approach of JSX code in Basic JS
  /* 
  const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById('root').append(para);
  */
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    // This is JSX which was created by the react team, HTML code inside of JS
    // change the code in public/index.html, transformed in the browser using the main.chunk.js
    <div>
      <ExpenseDisplay expenses= {expenses}/>
    </div>

    // Semi behind the scene code of React, import React from 'react'
      // return React.createElement('div', {}, Expenses Component - React.createElement(Expenses, {expenses: expenses}) )
        // after the second comma is only what's in the element which could be an infinite number of things and all would have to have React.createElement()
  );
}

export default App;
