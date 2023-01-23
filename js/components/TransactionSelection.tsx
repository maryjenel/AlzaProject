import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';
import {convertDate, convertDateToUnixSeconds} from '../utils/utils';
import DatePicker from 'react-native-date-picker';
import {FLEX_ROW} from '../theme/common';
import {spacing} from '../theme/spacing';

const TransactionSelection = ({
  dateInUnixSeconds,
  setDate,
}: {
  dateInUnixSeconds: number | null;
  setDate: Function;
}) => {
  const [open, setOpen] = React.useState(false);
  const dateInSeconds = dateInUnixSeconds !== null ? dateInUnixSeconds : 0;
  const date = new Date(dateInSeconds * 1000);
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <Text>
          {dateInSeconds > 0 ? convertDate(dateInSeconds) : 'select date'}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        minimumDate={new Date('2021')}
        maximumDate={new Date()}
        onConfirm={newDate => {
          setOpen(false);
          setDate(convertDateToUnixSeconds(newDate));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...FLEX_ROW,
    padding: spacing[2],
    width: '100%',
    justifyContent: 'space-between',
  },
  firstSection: {
    marginLeft: 10,
  },
});

export default TransactionSelection;
