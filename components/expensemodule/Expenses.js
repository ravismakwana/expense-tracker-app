import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from './Card';

const Expenses = (props) => { 
    const d = new Date();
    let year = d.getFullYear().toString();
    // let year = '2020';
    const [currentYear, setSelectedYear ] = useState(year);

    const handleSelectedYear = (selectedYear) => {
        console.log(selectedYear);
        setSelectedYear(selectedYear);
        props.onSelectedYearApp(selectedYear);
    }

    const filteredExpense = props.items.filter ((exp) => {
        return exp.date.getFullYear().toString() === currentYear;
    });
    let expenseContent = <p className="text-white">No expense found.</p>;
    if(filteredExpense.length > 0 ) {
        expenseContent = filteredExpense.map((expense) => (
        <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}/>
        ))
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={ currentYear } onSelectedYear={ handleSelectedYear } />
            { expenseContent }
        </Card>
    );
}

export default Expenses;