import React from "react";
import './Savings.css';

const Savings = (props) => {
  const [isPurse, setIsPurse] = React.useState(true);
  const [newpurse, setNewpurse] = React.useState(0);

  function toggle() {
    setIsPurse(!isPurse);
  }

  function savedPurse(e) {
    e.preventDefault();
    const totalExpenses = props.items.reduce((acc, item) => acc + item.amount, 0);
    if (totalExpenses > newpurse) {
      alert("Total expenses exceed the new purse value.");
      toggle();
      return;
    }
    props.updateWallet(newpurse);
    setNewpurse(0);
    toggle();
  }

  return (
    <div className="savings">
      {isPurse ? (
        <div className="current_purse">
          <h3>Your Current Purse</h3>
          <h1>₹{props.wallet}</h1>
          <button onClick={toggle}>Update Purse</button>
        </div>
      ) : (
        <div className="update_form">
          <form onSubmit={savedPurse}>
            <label htmlFor="purse">New Purse Value</label>
            <input
              type="number"
              value={newpurse}
              placeholder="New Purse.."
              onChange={(e) => {
                setNewpurse(e.target.value);
              }}
            />
            <button>Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Savings;
