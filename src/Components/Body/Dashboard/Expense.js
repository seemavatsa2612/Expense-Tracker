import React from "react";
import './Expense.css';

const Expense = (props) => {
  const [isAnalyze, setIsAnalyze] = React.useState(false);

  function toggle() {
    setIsAnalyze(!isAnalyze);
  }

  return (
    <div className="expenses">
      <h3>Your Expenses</h3>
      {!isAnalyze && (
        <React.Fragment>
          <h1>₹{props.items.reduce((acc, item) => acc + item.amount, 0)}</h1>
          <button onClick={toggle}>Analyze</button>
        </React.Fragment>
      )}
      {isAnalyze && (
        <React.Fragment>
          <ul>
            {Object.entries(
              props.items.reduce((acc, item) => {
                if (!acc[item.category]) {
                  acc[item.category] = 0;
                }
                acc[item.category] += item.amount;
                return acc;
              }, {})
            )
              .sort((a, b) => b[1] - a[1])
              .map(([category, total]) => (
                <li key={category} className="lists">
                  <span>{category}</span>
                  <span>₹{total}</span>
                </li>
              ))}
          </ul>
          <button onClick={toggle}>Go Back</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Expense;
