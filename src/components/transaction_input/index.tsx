import React from "react";

const TransactionInput: React.FC = () => {
  return (
    <div>
      <h2>Transaction Input Component</h2>
      <h5>Description</h5>
      <input type="text" name="description" />
      <h5>Amount</h5>
      <input type="text" name="amount" />
      <h5>Date</h5>
      <input type="text" name="date" />
      <button type="submit">Submit</button>
    </div>
  );
};
export default TransactionInput;
