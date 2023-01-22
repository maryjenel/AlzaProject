export type TransactionResponse = {
  transactions: Transaction[];
  hasMore: boolean;
};

export type Transaction = {
  amount: number;
  currency: string;
  date: number;
  title: string;
  description: string;
  id: string;
  tags: string[];
};
