import React from "react";
import "./Header.css";
import Expense from "./Expanse.jsx";
import Dashboard from "./Dashboard.jsx";
const Header=()=>{
return <header>
    <h1>Exp Tracker</h1>
    <div className="logo">
        <Expense />
        <Dashboard />
    </div>
</header>
}
export default Header;