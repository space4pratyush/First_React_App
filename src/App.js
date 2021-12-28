import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 203.03,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Health Insurance",
    amount: 473.3,
    date: new Date(2021, 2, 19),
  },
  {
    id: "e3",
    title: "General Insurance",
    amount: 94.45,
    date: new Date(2019, 3, 13),
  },
  {
    id: "e4",
    title: "Investment Plan",
    amount: 104.9,
    date: new Date(2020, 4, 17),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
