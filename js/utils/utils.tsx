import {Dimensions} from 'react-native';

export const convertDate = (dateInSeconds: number) => {
  var date = new Date(dateInSeconds * 1000).toLocaleDateString('en-US');
  return date;
};

export const convertDateToUnixSeconds = (dateReadable: Date) => {
  return Math.floor(new Date(dateReadable).getTime() / 1000);
};

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
