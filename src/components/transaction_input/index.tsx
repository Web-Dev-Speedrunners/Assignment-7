import React, { BaseSyntheticEvent, useContext, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from "reactstrap";
import TransactionContext from "../../contexts/transaction";
import { TransactionEntry } from "../../types";

const TransactionInput: React.FC = () => {
  const [formResponse, updateForm] = useState<TransactionEntry>({
    amount: 0,
    description: "",
    date: new Date(),
  });

  const { addCreditEntry } = useContext(TransactionContext);

  const handleSubmit = (a: any) => {
    a.preventDefault();
    addCreditEntry(formResponse);
  };

  const handleAmountChange = (e: BaseSyntheticEvent) => {
    const amount: number = parseInt(e.target.value, 10) || 0;
    updateForm({ ...formResponse, amount });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Transaction</Label>
          <InputGroup size="lg">
            <Input placeholder="Description" type="text" />
            <Input placeholder="Date" type="date" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input
              placeholder="Amount"
              min={0}
              max={100}
              type="number"
              step="1"
              onChange={handleAmountChange}
            />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
          </InputGroup>
          <FormGroup />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default TransactionInput;
