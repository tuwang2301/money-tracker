export interface ITransaction {
  id: number;
  name: string;
  amount: number;
  category?: string;
  date: string;
  type: "Income" | "Expense";
  icon: string;
}
