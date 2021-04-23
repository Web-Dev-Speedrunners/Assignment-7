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

  useEffect(() => {
    const handleRetrieveInitialTransactions = async () => {
      let debit = 0;
      let credit = 0;
      /* eslint no-return-assign: "error" */
      await GetInitialDebitTransactions().then((value) => {
        setDebitEntries(value);
        value.forEach(({ amount }) => (debit += amount));
      });
      /* eslint no-return-assign: "error" */
      await GetInitialCreditTransactions().then((value) => {
        setCreditEntries(value);
        value.forEach(({ amount }) => (credit += amount));
      });

      setBalance(credit - debit);
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
