import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import _ from 'lodash';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TransactionItem from '../components/TransactionItem';
import useGetTransactions from '../queries/useGetTransactions';
import {Transaction} from '../types/types';
import TransactionSelection from '../components/TransactionSelection';

const TransactionScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}: {item: Transaction}) => {
    return <TransactionItem item={item} />;
  };
  const [beforeDate, setBeforeDate] = React.useState(1672540200);
  const [afterDate, setAfterDate] = React.useState(1672549200);

  const {data, isLoading, fetchNextPage, refetch, isFetching} =
    useGetTransactions(beforeDate, afterDate);
  const transactions =
    data?.pages[0].data.hasMore === false
      ? []
      : data?.pages.map(page => page?.data?.transactions).flat();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <TransactionSelection
          dateInUnixSeconds={beforeDate}
          setDate={(dateSeconds: number) => {
            setBeforeDate(dateSeconds);
            refetch();
          }}
        />
        <TransactionSelection
          dateInUnixSeconds={afterDate}
          setDate={(dateSeconds: number) => {
            setAfterDate(dateSeconds);
            refetch();
          }}
        />
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        refreshing={isLoading || isFetching}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </SafeAreaView>
  );
};
export default TransactionScreen;
