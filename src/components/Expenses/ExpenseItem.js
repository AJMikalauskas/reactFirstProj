import "./ExpenseItem.css";
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022, 1, 15);
    // const expenseTitle = 'Crypto Payment1';
    // const expenseAmt = 101;

  return (
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
        {/* <h2>Crypto Payment</h2> 
        <div className="expense-item__price">$100</div>*/}
        <div className="expense-item__price">{"$" + props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
