import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import _ from 'lodash';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TransactionItem from '../components/TransactionItem';
import useGetTransactions from '../queries/useGetTransactions';
import {Transaction} from '../types/types';
import TransactionSelection from '../components/TransactionSelection';
import {spacing} from '../theme/spacing';

const TransactionScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}: {item: Transaction}) => {
    return <TransactionItem item={item} />;
  };
  const [beforeDate, setBeforeDate] = React.useState<number | null>(null);
  const [afterDate, setAfterDate] = React.useState<number | null>(null);

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
        <TouchableOpacity
          style={styles.allTransactionsButton}
          onPress={() => {
            setBeforeDate(null);
            setAfterDate(null);
          }}>
          <Text>see all transactions</Text>
        </TouchableOpacity>
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

interface Styles {
  allTransactionsButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  allTransactionsButton: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: spacing[2],
  },
});
export default TransactionScreen;
