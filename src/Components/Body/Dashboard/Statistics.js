import React from "react";
import Savings from "./Savings";
import Expense from "./Expense";
import Total from "./Total";
import "./Statistics.css";

const Statistics = (props) => {
  const [purse, setPurse] = React.useState(0);

  React.useEffect(() => {
    const storedPurse = localStorage.getItem("purse");
    if (storedPurse) {
      setPurse(Number(storedPurse));
    }
  }, []);

  function updatePurse(newPurse) {
    setPurse(newPurse);
    localStorage.setItem("purse", newPurse.toString());
  }

  return (
    <section className="stats">
      <Savings wallet={purse} updateWallet={updatePurse} items={props.items}/>
      <Expense items={props.items}/>
      <Total items={props.items} wallet={purse}/>
    </section>
  );
};

export default Statistics;
