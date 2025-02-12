import React from "react";
import "./Header.css";
import Expense from "./Expanse.jsx";
import Dashboard from "./Dashboard.jsx";
const Header=(props)=>{
    function switchmodes(){
        props.switch();
    }
return <header>
    <h1>Exp Tracker</h1>
    <div className="logo">
        {!props.expense && <Expense switch={switchmodes}/>}
        {!props.dashboard && <Dashboard switch={switchmodes}/>}
    </div>
</header>
}
export default Header;