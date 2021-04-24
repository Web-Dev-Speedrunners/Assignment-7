import React, { BaseSyntheticEvent, useState, useRef } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from "reactstrap";
import { TransactionEntry, TransactionEntryDefault } from "../../types";

interface AddTransactionMethod {
  addMethod: (entry: TransactionEntry) => void;
}

const TransactionInput: React.FC<AddTransactionMethod> = ({ addMethod }) => {
  const [formResponse, updateForm] = useState<TransactionEntry>(
    new TransactionEntryDefault()
  );
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  // handler for the submission of the whole form
  const handleSubmit = (buttonEvent: BaseSyntheticEvent) => {
    // prevent page refresh
    buttonEvent.preventDefault();

    addMethod(formResponse);
    updateForm(new TransactionEntryDefault());

    // clear the unmanaged items from the form
    formRef.current.reset();
  };

  // handlers for each individual property in the form
  const handleAmountChange = (e: BaseSyntheticEvent) => {
    const amount: number = parseInt(e.target.value, 10) || 0;
    updateForm({ ...formResponse, amount });
  };

  const handleDescriptionChange = (e: BaseSyntheticEvent) => {
    updateForm({ ...formResponse, description: e.target.value });
  };

  const handleDateChange = (e: BaseSyntheticEvent) => {
    updateForm({ ...formResponse, date: new Date(e.target.value) });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} innerRef={formRef}>
        <FormGroup>
          <Label for="transaction">Transaction</Label>
          <InputGroup size="lg">
            <Input
              placeholder="Description"
              type="text"
              onChange={handleDescriptionChange}
            />
            <Input placeholder="Date" type="date" onChange={handleDateChange} />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input
              placeholder="Amount"
              min={0}
              max={1000}
              type="number"
              step="1"
              onChange={handleAmountChange}
            />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
          </InputGroup>
          <FormGroup />
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default TransactionInput;
