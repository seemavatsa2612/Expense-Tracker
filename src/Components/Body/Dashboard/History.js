import React from "react";

const History = (props) => {
  return (
    <section>
       <h1>Recent History</h1>
      {props.items.length <= 0 ? (
        <h1>No Item Found In History</h1>
      ) : (
        <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.items.slice(-3).reverse().map((expense) => (
            <tr key={expense.id}>
              <td>{expense.item}</td>
              <td>₹{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </section>
  );
};

export default History;
