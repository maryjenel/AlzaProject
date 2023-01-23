import axios from 'axios';

const getTransactions = (
  beforeDate: number | null,
  afterDate: number | null,
  startingAfter: string,
) =>
  axios.get('https://assignment.alza.app/transactions', {
    params: {
      dateGTE: beforeDate,
      dateLTE: afterDate,
      startingAfter,
    },
  });

export {getTransactions};
