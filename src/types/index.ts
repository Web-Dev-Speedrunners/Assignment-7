export type TransactionEntry = {
  description: string;
  amount: number;
  date: Date;
};

export class TransactionEntryDefault implements TransactionEntry {
  amount: number;

  description: string;

  date: Date;

  constructor() {
    this.amount = 0;
    this.description = "";
    this.date = new Date(0);
  }
}
