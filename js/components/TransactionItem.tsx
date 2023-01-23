import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FLEX_FILL, FLEX_ROW} from '../theme/common';
import {FontSize} from '../theme/font';
import {spacing} from '../theme/spacing';
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
    fontSize: FontSize.M,
    fontWeight: '700',
    width: screenWidth * 0.5,
  },
  firstSection: {
    marginLeft: spacing[2],
  },
  transactionItemContainer: {
    ...FLEX_ROW,
    ...FLEX_FILL,
    width: screenWidth,
    paddingTop: spacing[2],
    paddingRight: spacing[2],
    justifyContent: 'space-between',
  },
  description: {
    width: screenWidth * 0.5,
  },
  rightTextAlight: {textAlign: 'right'},
  secondSection: {paddingLeft: spacing[1], alignSelf: 'flex-end'},
  sectionDescription: {
    marginTop: spacing[2],
    fontSize: FontSize.L,
  },
  highlight: {
    fontWeight: '700',
  },
});
export default TransactionItem;
