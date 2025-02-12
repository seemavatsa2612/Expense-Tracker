import React from "react";
import Statistics from "./Statistics";
import History from "./History";
import './Dashboard.css';

const Dashboard = (props) => {
  return (
    <main className="Dash">
      <Statistics items={props.items} />
      <History items={props.items} />
    </main>
  );
};

export default Dashboard;
