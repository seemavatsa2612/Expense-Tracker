import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [item, setItem] = React.useState("");
    const [category, setCategory] = React.useState("food");
    const [amount, setAmount] = React.useState("");
    
    function addItem(e) {
        e.preventDefault();
        
        if (!item.trim()) {
            alert("Please enter an item");
            return;
        }
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        const currentDate = new Date().toISOString().split('T')[0];
        const newId = props.data.length > 0 ? Number(props.data[props.data.length - 1].id + 1) : 1;
        
        props.addItem({
            id: newId,
            item: item,
            category: category,
            amount: Number(amount),
            date: currentDate
        });

        setItem("");
        setCategory("food");
        setAmount("");
    }

    return (
        <div className="expenselist"> 
            <form onSubmit={addItem}>
                <label htmlFor="item">Item:</label>
                <input 
                    id="item" 
                    name="item" 
                    type="text" 
                    placeholder="Enter your expense" 
                    onChange={(e) => setItem(e.target.value)} 
                    value={item}
                    required
                />

                <label htmlFor="category">Choose a category:</label>
                <select 
                    id="category" 
                    name="category" 
                    onChange={(e) => setCategory(e.target.value)} 
                    value={category}
                >
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="others">Others</option>
                </select>

                <label htmlFor="date">Date:</label>
                <input 
                    id="date"
                    name="date" 
                    type="date"
                    value={new Date().toISOString().split('T')[0]}
                    readOnly
                />

                <label htmlFor="amount">Amount</label>
                <input 
                    id="amount"
                    name="amount" 
                    type="number" 
                    min="0"
                    step="0.01"
                    onChange={(e) => setAmount(e.target.value)} 
                    value={amount}
                    required
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ExpenseForm;
