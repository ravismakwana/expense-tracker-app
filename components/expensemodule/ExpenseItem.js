import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

  
  // const [ title, setTitle ] = useState(props.title);
  // const [ newTitle, setNewTitle ] = useState('');

  // const handleState = () => {
  //   setTitle(title);
  // }
  // const newChangeTitle = (event) => {
  //   setNewTitle(event.target.value);
  // }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={ props.date } />
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <Card className="expense-item__price">${props.amount}</Card>
      </div>
      {/* <input type="text" onChange={ newChangeTitle } />
      <button onClick={ handleState }>Update Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
