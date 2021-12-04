import React, {useState} from 'react';
import "./App.css";
import Expenses from "./components/expensemodule/Expenses";
import Card from "./components/expensemodule/Card";
import NewExpense from "./components/newexpense/NewExpense";

const DUMMY_EXP = [
    {
      date: new Date(2022, 2, 28),
      title: "Maintences",
      amount: 300,
    },
    { 
      date: new Date(2021, 6, 8),
      title: "Rent",
      amount: 700,
    },
    {
      date: new Date(2019, 2, 27),
      title: "Hospital ",
      amount: 500,
    },
    {
      date: new Date(2022, 3, 18),
      title: "Loan",
      amount: 2000,
    },
];

const App = () => {

  const [expense, setExpenses ] = useState(DUMMY_EXP);

  const handleSubmittedAppData = (formDataApp) => {

    const newData = [ formDataApp, ...expense ];
    setExpenses(newData);
    console.log(formDataApp);
    
  }
  return (
    <Card className="section">
      <NewExpense onSubmittedAppData={ handleSubmittedAppData } />
      <Expenses items={expense} />
    </Card>
  );
};

export default App;
