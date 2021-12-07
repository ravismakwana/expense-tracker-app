import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const handleSubmittedData = (formSubmittedData) => {
        console.log(formSubmittedData);
        const formDataApp = {
            ...formSubmittedData,
            id: Math.floor(Math.random() * 1000)
        }

        props.onSubmittedDataApp(formDataApp);
        
    }
    
    
    return (
        <div className="new-expense">
            <ExpenseForm onSubmittedData={ handleSubmittedData } />
        </div>
    );
}

export default NewExpense;