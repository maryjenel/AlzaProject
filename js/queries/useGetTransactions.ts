import {useInfiniteQuery} from 'react-query';
import {getTransactions} from '../api/transactions.api';
import {GET_TRANSACTIONS} from '../utils/constants';

const useGetTransactions = (
  beforeDate: number | null,
  afterDate: number | null,
) => {
  return useInfiniteQuery(
    GET_TRANSACTIONS,
    ({pageParam}) => {
      return getTransactions(beforeDate, afterDate, pageParam);
    },
    {
      getNextPageParam: lastGroup => {
        if (lastGroup?.data.hasMore === false) {
          return undefined;
        }
        const lastGrouplength = lastGroup.data?.transactions.length;
        const lastPage = lastGroup.data?.transactions[lastGrouplength - 1];
        return lastPage.id;
      },
    },
  );
};

export default useGetTransactions;
