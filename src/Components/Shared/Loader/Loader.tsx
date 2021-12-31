import React from 'react';
import {ActivityIndicator} from 'react-native';
type Props = {
  isLoading: boolean;
};
const Loader = (props: Props) => {
  const {isLoading}: any = props;
  return isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : null;
};

export default Loader;
