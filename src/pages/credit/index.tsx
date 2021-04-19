import React from "react";
import TransactionInput from "../../components/transaction_input";
import TransactionList from "../../components/transaction_list";

const CreditPage: React.FC = () => {
  return (
    <div>
      <h1>Credit Page</h1>
      <TransactionList />
      <TransactionInput />
    </div>
  );
};

export default CreditPage;
