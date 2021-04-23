import React, { useContext } from "react";
import TransactionInput from "../../components/transaction_input";
import TransactionList from "../../components/transaction_list";
import TransactionContext from "../../contexts/transaction";

const CreditPage: React.FC = () => {
  const { creditEntries } = useContext(TransactionContext);

  return (
    <div>
      <h1>Credit Page</h1>
      <TransactionList entries={creditEntries} />
      <TransactionInput />
    </div>
  );
};

export default CreditPage;
