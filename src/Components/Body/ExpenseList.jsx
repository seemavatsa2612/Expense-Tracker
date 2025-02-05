import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ itemList, removeItem }) => {
  return (
    <div className="expenselist">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.item}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount}</td>
              <td>
                <button onClick={() => removeItem(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
