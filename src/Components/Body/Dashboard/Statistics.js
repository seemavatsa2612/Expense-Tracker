import React from "react";
import Savings from "./Savings";
import Expense from "./Expense";
import Total from "./Total";
import './Statistics.css';

const Statistics = () => {
  return (
    <section className="stats">
      <Savings />
      <Expense />
      <Total />
    </section>
  );
};

export default Statistics;
