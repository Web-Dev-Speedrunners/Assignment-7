import React from "react";

const TransactionInput: React.FC = () => {
  return (
    <form>
      <div>
        <h2>Transaction Input Component</h2>
        <h5>Description</h5>
        <h5>Amount</h5>
        <h5>Date</h5>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default TransactionInput;
