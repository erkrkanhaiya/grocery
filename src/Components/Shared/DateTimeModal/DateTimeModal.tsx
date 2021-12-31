import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
type Props = {
  isVisible: boolean;
  mode: string;
  handleConfirm: Function;
  hideDatePicker: Function;
};
const DateTimeModal = (props: Props) => {
  const {isVisible, mode, handleConfirm, hideDatePicker}: any = props;
  return (
    <View>
      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimeModal;
