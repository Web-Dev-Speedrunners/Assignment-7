// TODO: Remove ESLint line below
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { TransactionEntry } from "../types";

export type TransactionContextValue = {
  balance: number;
  creditEntries: Array<TransactionEntry>;
  debitEntries: Array<TransactionEntry>;
  addCreditEntry: (entry: TransactionEntry) => void;
  addDebitEntry: (entry: TransactionEntry) => void;
};

const unimplemented = () => {
  throw new Error("Context has not been initialized");
};

const TransactionContext = createContext<TransactionContextValue>({
  creditEntries: [],
  debitEntries: [],
  balance: 0,
  addCreditEntry: unimplemented,
  addDebitEntry: unimplemented,
});

export const TransactionContextProvider: React.FC = ({ children }) => {
  const [balance, setBalance] = useState<number>(0);
  const [creditEntries, setCreditEntries] = useState<Array<TransactionEntry>>(
    []
  );
  const [debitEntries, setDebitEntries] = useState<Array<TransactionEntry>>([]);

  useEffect(() => {
    const handleRetrieveInitialTransactions = async () => {
      // TODO: Retrieve initial debit and credit transactions from
      // src/services/initial_transaction.ts
      // and update the balance
    };

    handleRetrieveInitialTransactions();
  }, []);

  const addDebitEntry = (_entry: TransactionEntry): void => {
    // TODO: Implement Add Credit Entry
  };

  const addCreditEntry = (_entry: TransactionEntry): void => {
    // TODO: Implement Add Credit Entry
  };

  return (
    <TransactionContext.Provider
      value={{
        balance,
        creditEntries,
        debitEntries,
        addDebitEntry,
        addCreditEntry,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
