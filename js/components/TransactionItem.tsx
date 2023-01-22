import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Transaction} from '../types/types';
import {convertDate, screenWidth} from '../utils/utils';

const TransactionItem = ({item}: {item: Transaction}) => {
  const dateReadable = convertDate(item.date);
  return (
    <View style={styles.transactionItemContainer}>
      <View style={styles.firstSection}>
        <Text style={styles.titleSection}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.secondSection}>
        <Text style={styles.rightTextAlight}>{item.amount}</Text>
        <Text style={styles.rightTextAlight}>{dateReadable}</Text>
        <Text>{item.tags.map(tag => ` ${tag}`)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    fontSize: 15,
    fontWeight: '700',
    width: screenWidth * 0.5,
  },
  firstSection: {
    marginLeft: 10,
  },
  transactionItemContainer: {
    width: screenWidth,
    paddingTop: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    width: screenWidth * 0.5,
  },
  rightTextAlight: {textAlign: 'right'},
  secondSection: {right: 0, paddingLeft: 5, alignSelf: 'flex-end'},
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default TransactionItem;
