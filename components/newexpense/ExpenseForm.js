import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');

    const titleEventHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountEventHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateEventHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandlerForm = (event) => {
      event.preventDefault();
        const formData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
        }
      
        props.onSubmittedData(formData);
        console.log(formData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');        
    }

  return (
    <form onSubmit={ submitHandlerForm }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={ titleEventHandler } value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={ amountEventHandler } value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-02-02" onChange={ dateEventHandler }  value={ enteredDate } />
        </div>
        <div className="new-expense__actions">
          <button type="submit" className="btn-expense" onClick={ submitHandlerForm }>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
