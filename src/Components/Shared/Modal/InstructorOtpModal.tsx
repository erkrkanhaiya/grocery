import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Modal, Portal, useTheme } from 'react-native-paper';
import images from 'src/Assets/images';
import Touchable from 'src/Components/Custom/InputComponent/Touchable';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const InstructorOtpModal = (props: any) => {
  const { toggleModal, isVisible, code, onVerify, setCode, resend } = props;

  const theme = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          backgroundColor: theme.colors.white,
          padding: 20,
          height: scaler(353),
          width: scaler(350),
          alignSelf: 'center',
        },
        underlineStyleBase: {
          width: 50,
          height: 50,
          borderRadius: scaler(5),
          color: '#000',
        },
        underlineStyleHighLighted: {
          borderColor: '#03DAC6',
        },
      }),
    [theme.colors.white],
  );
  return (
    <Portal>
      <Modal
        visible={isVisible}
        dismissable={false}
        contentContainerStyle={styles.containerStyle}>
        <TouchableOpacity
          onPress={() => toggleModal()}
          style={{ position: 'absolute', top: scaler(15), right: scaler(15) }}>
          <Image
            source={images.crossBlack}
            style={{
              height: scaler(16),
              width: scaler(16),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Typography
          type={'bold'}
          textAlign="center"
          fontSize={scaler(16)}
          variant="black">
          Enter OTP
        </Typography>
        <Spacer size={scaler(24)} />
        <Typography
          type={'regular'}
          fontSize={scaler(16)}
          color={theme.colors.text}
          textAlign="center">
          OTP will be shared by the
        </Typography>
        <Spacer size={scaler(5)} />
        <Typography
          type={'regular'}
          fontSize={scaler(16)}
          color={theme.colors.text}
          textAlign="center">
          instructor.
        </Typography>
        <Spacer size={scaler(25)} />
        <OTPInputView
          style={{ width: '80%', height: 100, alignSelf: 'center' }}
          pinCount={4}
          editable={true}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={(c) => setCode(c)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(c) => {
            console.log(`Code is ${c}, you are good to go!`);
          }}
        />
        <Spacer size={scaler(30)} />
        <Touchable
          onPress={() => onVerify()}
          color={theme.colors.primary}
          labelStyle={{
            color: 'white',
            fontSize: scaler(18),
            fontFamily: 'Tahoma',
          }}>
          Verify
        </Touchable>
      </Modal>
    </Portal>
  );
};

export default InstructorOtpModal;
