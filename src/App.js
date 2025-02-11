import React from "react";
import Body from "./Components/Body/Body";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const [dash, setDash] = React.useState(true);
  const [exp, setExp] = React.useState(false);

  function switchmodes() {
    setDash(dash !== true ? true : false);
    setExp(exp !== true ? true : false)
  }
  return (
    <React.Fragment>
      <Header switch={switchmodes} dashboard={dash} expense={exp}/>
      <Body dashboard={dash} expense={exp}/>
    </React.Fragment>
  );
}

export default App;
