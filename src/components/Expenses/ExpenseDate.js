import './ExpenseDate.css'

const ExpenseDate = (props) =>
{
    // props.date is the attribute being set in this JS file, so if you create a <ExpenseDate></ExpenseDate>,
        // You will have to set the date attribute, you can set it to another level of props on that file
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.toLocaleString('en-US', {year: 'numeric'});
    const day = props.date.toLocaleString('en-US', {day: 'numeric'});

    return (
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
        {/* Long way and not best practice to do it this way
            <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
            <div>{props.date.toLocaleString('en-US', {year: 'numeric'})}</div>
            <div>{props.date.toLocaleString('en-US', {day: 'numeric'})}</div> */}
      </div>
    );
}

export default ExpenseDate;