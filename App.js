import "./App.css";
import Expenses from "./components/expensemodule/Expenses";
import Card from "./components/expensemodule/Card";
import NewExpense from "./components/newexpense/NewExpense";

const App = () => {
  const expense = [
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
  return (
    <Card className="section">
      <NewExpense />
      <Expenses items={expense} />
    </Card>
  );
};

export default App;
