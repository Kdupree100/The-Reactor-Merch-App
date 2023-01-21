import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // const [title1, setTitle1] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  //  let title = props.title;

  const ClickHandler = () => {
    // title = "Updated!";
    console.log(title);
    setTitle("Wipes");
  };
  // const ClickHandler1 = () => {
  //   // title = "Updated!";
  //   console.log(title1);
  //   setTitle1("Toilet Paper");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title </button>
      {/* <button onClick={ClickHandler1}>RESET </button> */}
    </Card>
  );
}

export default ExpenseItem;
