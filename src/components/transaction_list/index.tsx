import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { TransactionEntry } from "../../types";

interface TransactionEntries {
  entries: Array<TransactionEntry>;
}

const NoResults: React.FC = () => (
  <TableRow>
    <TableCell>Empty</TableCell>
    <TableCell>Empty</TableCell>
    <TableCell>Empty</TableCell>
  </TableRow>
);

const Transaction = ({ id, date, description, amount }: TransactionEntry) => {
  return (
    <TableRow key={id}>
      <TableCell>{date.toDateString()}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{amount}</TableCell>
    </TableRow>
  );
};

const TransactionList: React.FC<TransactionEntries> = ({ entries }) => {
  console.log("entries", entries);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* TODO
            - RENDER `NoResults` when entries.length === 0 otherwise render the transactions
            - Also there are warning issues about each child in the list should have a unique key
              So i tried adding id for the table rows in the transaction component, but doesn't fix
          */}
          {entries.map((entry) => {
            const { id, date, description, amount } = entry;
            console.log(date.toDateString(), description, amount);
            return (
              <Transaction
                id={id}
                date={date}
                description={description}
                amount={amount}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;
