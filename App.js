import React, {useState} from 'react';
import "./App.css";
import Expenses from "./components/expensemodule/Expenses";
import Card from "./components/expensemodule/Card";
import NewExpense from "./components/newexpense/NewExpense";

const DUMMY_EXP = [
    {
      id: 'a1',
      date: new Date(2022, 2, 28),
      title: "Maintences",
      amount: 300,
    },
    { 
      id: 'a2',
      date: new Date(2021, 6, 8),
      title: "Rent",
      amount: 700,
    },
    {
      id: 'a3',
      date: new Date(2019, 2, 27),
      title: "Hospital ",
      amount: 500,
    },
    {
      id: 'a4',
      date: new Date(2022, 3, 18),
      title: "Loan",
      amount: 2000,
    },
];

const App = () => {
  const d = new Date();
  let year = d.getFullYear();
  const [expense, setExpesens ] = useState(DUMMY_EXP);
  const [appYear, setAppYear ] = useState(year);

  const handleSubmittedDataApp = (expenseDataApp) => {
      const updatedExpenseData = [...expense, expenseDataApp ];
      setExpesens(updatedExpenseData);
  }

  const handleSelectedYearApp = (yearApp) => {
    setAppYear(yearApp);
  }

  return (
    <Card className="section">
      <h2 className="text-center" >You are viewing { appYear } year expenses</h2>
      <NewExpense onSubmittedDataApp={ handleSubmittedDataApp } />
      <Expenses items={expense} onSelectedYearApp={ handleSelectedYearApp } />
    </Card>
  );
};

export default App;
