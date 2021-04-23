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
  const size: number = entries.length;

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
          {size === 0 ? (
            <NoResults />
          ) : (
            entries.map((entry) => {
              const { id, date, description, amount } = entry;
              return (
                <Transaction
                  id={id}
                  date={date}
                  description={description}
                  amount={amount}
                />
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;
