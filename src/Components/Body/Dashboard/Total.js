import React from "react";
import './Total.css';

const Total = (props) => {
    const remain = props.wallet - props.items.reduce((acc, item) => acc + item.amount, 0)
    return <div className="total">
     <h3>Remaining Purse</h3>
     <h1>₹{remain}</h1>
     <div className="task-status">
        <div
          className="status-bar"
          style={{
            width: `${(remain / props.wallet) * 100}%`,
            height: "20px",
            backgroundColor: "rgb(68, 71, 71)",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {`${(remain / props.wallet) * 100}%`}
        </div>
      </div>
    </div>
}

export default Total;