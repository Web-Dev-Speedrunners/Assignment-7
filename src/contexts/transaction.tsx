// TODO: Remove ESLint line below
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { TransactionEntry } from "../types";
import {
  GetInitialDebitTransactions,
  GetInitialCreditTransactions,
} from "../services/initial_transactions";

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
  
  /* eslint no-return-assign: ["error", "always"] */
  useEffect(() => {
    const handleRetrieveInitialTransactions = async () => {
      // TODO: Retrieve initial debit and credit transactions from
      // src/services/initial_transaction.ts
      // and update the balance
      let bal = 0;
      GetInitialDebitTransactions().then((value) => {
        setDebitEntries(value);
        value.forEach(({ amount }) => (bal -= amount));
      });

      GetInitialCreditTransactions().then((value) => {
        setCreditEntries(value);
        value.forEach(({ amount }) => (bal += amount));
      });

      setBalance(bal);
    };

    handleRetrieveInitialTransactions();
  }, []);

  const addDebitEntry = (_entry: TransactionEntry): void => {
    setDebitEntries([...debitEntries, _entry]);
    setBalance((bal) => bal - _entry.amount);
  };

  const addCreditEntry = (_entry: TransactionEntry): void => {
    setCreditEntries([...creditEntries, _entry]);
    setBalance((bal) => bal + _entry.amount);
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
