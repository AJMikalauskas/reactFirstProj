import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const storeYearHandler = (event) => {
    let year = event.target.value;
    console.log(year); 
    props.onYearSelected(year);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* Two Way Binding shown by setting the value of the select equal to the parent value sent down */}
        <select  value={props.selectedYear} onChange={storeYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;