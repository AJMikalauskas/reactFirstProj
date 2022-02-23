import React, { useState } from "react";
import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
import ExpenseChart from "./ExpenseChart";

const ExpenseDisplay = (props) => {
  // To have two way binding, send the curentYearFilteringBy back into the expensesFilter
  const [currentYearFilteringBy, changeYear] = useState("2022");
  //const [originalArr, filterArr] = useState(props.items);
  // console.log(originalArr);

  const filterYearHandler = (yearSelected) => {
    changeYear(yearSelected);
    console.log(yearSelected);
    //console.log(Number(yearSelected))
    //const filteredArr = originalArr.filter((item) => item.date.toLocaleString('en-US', {year: 'numeric'}) === yearSelected);
    //filterArr(originalArr.filter((item) => item.date.toLocaleString('en-US', {year: 'numeric'}) === yearSelected));
    // console.log(filteredArr);
    // filterArr(filteredArr);
    //console.log(originalArr);
    // This console will show the last value that was selected not the current one, won't cause change immediately,
    // Once called again, it will show the value it should have which will tehcnically create an unending cycle of consoling the last value.
    //console.log(currentYearFilteringBy);
  };

  // Frustrating Part 3 Challenge
  // This solution relatively filters the items and then maps the filtered items.
  //Remember everythign is a step, filtering is the first necessary step and then to map and show the items is a secondary concern
  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.toLocaleString("en-US", { year: "numeric" }) ===
      currentYearFilteringBy
    );
  });
  console.log(filteredExpenses);


  return (
      <Card className="expenses">
      <ExpensesFilter
        selectedYear={currentYearFilteringBy}
        onYearSelected={filterYearHandler}
      />
      {/* The ? is a JS ternary operator. The first value is if the conditional is true, the colon(:) is a separator between the first and 
          second value; The second value is the filteredExpenses.map() which is after the colon(:) */}
      
      {/* The && is very helpful in conditionals with JS. If the conditional is true, it will shwo what is after the && */}
      {/* Preset value is no expenses found if there are no things to show; If there are more than 0 things to show, it will show them/it 
      due to if statement above return */}
      {/* <ExpenseChart dataPoints = {filteredExpenses} /> */}
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items = {filteredExpenses} />

      {/* {filteredExpenses.length > 0 && filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
        {
        /* Hardcoded Values
         <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
    />
    <ExpenseItem
    title={props.expenses[2].title}
    amount={props.expenses[2].amount}
    date={props.expenses[2].date}
    />
    <ExpenseItem
    title={props.expenses[3].title}
    amount={props.expenses[3].amount}
    date={props.expenses[3].date}
    /> */}
    </Card>
    )
}

export default ExpenseDisplay;
