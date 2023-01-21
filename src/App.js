import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 97.57,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Samsung Curve 70",
    amount: 1575.57,
    date: new Date(2022, 5, 7),
  },
  {
    id: "e3",
    title: "Car insurance",
    amount: 295.57,
    date: new Date(2022, 11, 30),
  },
  {
    id: "e4",
    title: "Sectional Sofa",
    amount: 3057.77,
    date: new Date(2022, 5, 25),
  },
];
function App() {
  const [expense, setExpenses] = useState(Dummy_Expenses);

  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 97.57,
  //     date: new Date(2022, 7, 14),
  //   },
  //   {
  //     id: "e2",
  //     title: "Samsung Curve 70",
  //     amount: 1575.57,
  //     date: new Date(2022, 5, 7),
  //   },
  //   {
  //     id: "e3",
  //     title: "Car insurance",
  //     amount: 295.57,
  //     date: new Date(2022, 11, 30),
  //   },
  //   {
  //     id: "e4",
  //     title: "Sectional Sofa",
  //     amount: 3057.77,
  //     date: new Date(2022, 5, 25),
  //   },
  // ];
  const addExpenseHandler = (expense) => {
    // console.log("In app.js");
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
