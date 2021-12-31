import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Modal, Portal, useTheme } from 'react-native-paper';
import images from 'src/assets/images';
import Touchable from 'src/Components/Custom/InputComponent/Touchable';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import Center from '../Center/Center';
import Col from '../Col/Col';
import Row from '../Row/Row';
type Props = {
  toggleModal: Function;
  isVisible: string;
  heading: string;
  iconName: string;
  desc: string;
  onNext: Function;
  onPrevious: Function;
};
const StepModal = (props: Props) => {
  const {
    toggleModal,
    isVisible,
    heading,
    iconName,
    desc,
    onNext,
    onPrevious,
  } = props;
  const theme = useTheme();
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          backgroundColor: theme.colors.white,
          padding: 20,
          height: scaler(353),
          width: scaler(320),
          alignSelf: 'center',
          borderRadius: scaler(10),
          bottom: scaler(40)
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
        nextBtnLabelStyel: {
          color: 'white',
          fontSize: scaler(18),
          fontFamily: 'Tahoma',
        },
        nextBtnStyle: { width: scaler(142) },
        previousBtn: {
          width: scaler(142),
          borderWidth: scaler(1.5),
          borderColor: '#C0CFD5',
          borderRadius: scaler(25),
          alignItems: 'center',
          justifyContent: 'center',
        },
        imgIcon: {
          height: scaler(46),
          width: scaler(46),
          resizeMode: 'contain',
        },
        imgBackground: {
          backgroundColor: '#E5EAED',
          height: scaler(92),
          width: scaler(92),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: scaler(5),
          alignSelf: 'center',
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
        <Col>
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{ alignSelf: 'flex-end' }}>
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
            type={'medium'}
            textAlign="center"
            fontSize={scaler(22)}
            variant="black">
            {heading}
            {/* Add Bank Account */}
          </Typography>
          <Spacer size={scaler(40)} />

          <Col flex={0} style={styles.imgBackground}>
            <Image source={iconName} style={styles.imgIcon} />
          </Col>
          <Spacer size={scaler(20)} />
          <Typography
            type={'regular'}
            fontSize={scaler(16)}
            color={theme.colors.text}
            textAlign="center">
            {desc}
            {/* Click on next button to add account details */}
          </Typography>
          <Spacer size={scaler(38)} />
          <Center>
            <Row>
              <TouchableOpacity onPress={() => onPrevious()} style={styles.previousBtn}>
                <Typography
                  fontSize={scaler(18)}
                  type="regular"
                  color="#73868E">
                  Previous
                </Typography>
              </TouchableOpacity>
              <Spacer horizontal size={scaler(10)} />
              <Touchable
                onPress={() => onNext()}
                color={theme.colors.primary}
                style={styles.nextBtnStyle}
                labelStyle={styles.nextBtnLabelStyel}>
                Next
              </Touchable>
            </Row>
          </Center>
        </Col>
      </Modal>
    </Portal>
  );
};

export default StepModal;
