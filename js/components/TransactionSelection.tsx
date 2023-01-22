import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';
import {convertDate, convertDateToUnixSeconds} from '../utils/utils';
import DatePicker from 'react-native-date-picker';

const TransactionSelection = ({
  dateInUnixSeconds,
  setDate,
}: {
  dateInUnixSeconds: number;
  setDate: Function;
}) => {
  const [open, setOpen] = React.useState(false);

  const date = new Date(dateInUnixSeconds * 1000);
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <Text>{convertDate(dateInUnixSeconds)}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
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
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  firstSection: {
    marginLeft: 10,
  },
});

export default TransactionSelection;
