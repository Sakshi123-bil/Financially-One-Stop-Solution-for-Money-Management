import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../layouts/EmojiPickerPopup";


const AddExpenseForm = ({ onAddExpense }) => {
    const [expense, setExpense] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    // Handle input changes
    const handleChange = (key, value) => {
        setExpense({ ...expense, [key]: value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!expense.category || !expense.amount || !expense.date) {
            alert("Please fill all required fields");
            return;
        }
        onAddExpense(expense); // Send data to parent
        setExpense({ category: "", amount: "", date: "", icon: "" }); // Reset form
    };

    return (
        <div className="space-y-4">

            <EmojiPickerPopup
                icon={expense.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />
            <Input
                value={expense.category}
                onChange={({ target }) => handleChange("category", target.value)}
                label="Expense Category"
                placeholder="Food,travel etc"
                type="text"
            />

            {/* Amount */}
            <Input
                value={expense.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                label="Amount"
                placeholder=""
                type="number"
            />

            {/* Date */}
            <Input
                value={expense.date}
                onChange={({ target }) => handleChange("date", target.value)}
                label="Date"
                placeholder=""
                type="date"
            />
            <div className="flex justify-end mt-6">
                <button
                    type="submit"
                    className="add-btn add-btn-fill"
                    onClick={() => onAddExpense(expense)}
                >
                    Add Expense
                </button>
            </div>
        </div>
    );
};

export default AddExpenseForm;
