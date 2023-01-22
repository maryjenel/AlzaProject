import {ViewStyle} from 'react-native';
import {spacing} from './spacing';

export const FLEX_JCC: ViewStyle = {
  justifyContent: 'center',
};

export const FLEX_FILL: ViewStyle = {
  flex: 1,
};
export const FLEX_ROW: ViewStyle = {
  flexDirection: 'row',
};

/**
 * container
 */
export const CONTAINER: ViewStyle = {
  ...FLEX_JCC,
  flex: 1,
};

/**
 * title
 */

export const TITLE: ViewStyle = {
  marginBottom: spacing[3],
};

export const INPUT: ViewStyle = {
  width: '80%',
  borderColor: 'gray',
  borderWidth: 1,
};
