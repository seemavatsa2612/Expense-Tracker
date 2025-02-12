import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Dashboard from "./Dashboard/Dashboard";
import "./Body.css";

const Body = (props) => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      setList(JSON.parse(savedExpenses));
    }
  }, []);

  function addItem(item) {
    setList((prevList) => {
      const newList = [...prevList, item];
      localStorage.setItem("expenses", JSON.stringify(newList));
      return newList;
    });
  }

  function removeItem(id) {
    setList((prevList) => {
      const newList = prevList.filter((item) => item.id !== id);
      localStorage.setItem("expenses", JSON.stringify(newList));
      return newList;
    });
  }

  return (
    <React.Fragment>
      {props.dashboard && <Dashboard items={list} />}
      {props.expense && (
        <div className="BodyList">
          <React.Fragment>
            <ExpenseForm addItem={addItem} data={list} />
            <ExpenseList itemList={list} removeItem={removeItem} />
          </React.Fragment>
        </div>
      )}
    </React.Fragment>
  );
};

export default Body;
