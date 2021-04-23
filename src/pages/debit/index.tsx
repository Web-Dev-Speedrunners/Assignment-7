import React, { useContext } from "react";
import TransactionInput from "../../components/transaction_input";
import TransactionList from "../../components/transaction_list";

import TransactionContext from "../../contexts/transaction";

const DebitPage: React.FC = () => {
  const { debitEntries } = useContext(TransactionContext);

  return (
    <div>
      <h1>Debit Page</h1>
      <TransactionList entries={debitEntries} />
      <TransactionInput />
    </div>
  );
};

export default DebitPage;
