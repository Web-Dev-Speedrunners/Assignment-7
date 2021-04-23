export type TransactionEntry = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

export class TransactionEntryDefault implements TransactionEntry {
  id: string;

  amount: number;

  description: string;

  date: Date;

  constructor() {
    this.id = "-1";
    this.amount = 0;
    this.description = "";
    this.date = new Date(0);
  }
}
