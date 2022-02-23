import React, {useState} from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    // Minor naming convention for these functions to have Handler at the end of their name
      // Even with title being changed and the change is seen in the console, it isn't seen on the page, need a DOM change?
    //let title = props.title;

    // First Array Value is set equal to the starting state which is props.title
      // The Second Array Value if called like a function below, sets the state equal to whats in the second array value's ()
        // New states created every time this ExpenseItem is called in ExpenseDisplay, called 4 times in ExpenseDisplay
          // This works as an array, so the values within the array can be chaneged even if it's a const, changeTitle is a functtion the changes
    // the array value of title. React tracks the state using useState whether it's been initialized and whether it's changed from initialization
      // The first array value also stores the value of the useState. when changeTitle is called in the userclickHandler and I console.log(title),
        // it return the original title, but if I click the same btn again, in the console should be clicked which is the new value of title
  //  const [title, changeTitle] = useState(props.title);

  //   const userClickedHandler = () => {
  //     changeTitle('Clicked');
  //     console.log(title);
  //   }

  return (
    <li>
    <Card className="expense-item">
        {/* Sets the attribute of date equal to the date attribute read in at from the props of this file 
            Sets date attribute of ExpenseDate.js to the props read in to this file in App.js
            *MINDBLOWING WTF* - React is COOOOOOOOOOL AF!!!
        */}
      <ExpenseDate date={props.date} />
      {/* Long way and not best practice to do it this way
            <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
            <div>{props.date.toLocaleString('en-US', {year: 'numeric'})}</div>
            <div>{props.date.toLocaleString('en-US', {day: 'numeric'})}</div> */}
      {/* <div>Februrary 16 2022</div> */}
      <div className="expense-item__description">
      <h2>{props.title}</h2>
        {/*  <h2>{title}</h2>
        <h2>Crypto Payment</h2> 
        <div className="expense-item__price">$100</div>*/}
          {/* <button onClick={userClickedHandler}>Change Title</button>  */}
        <div className="expense-item__price">{"$" + props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
