import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { Modal, Portal, useTheme } from 'react-native-paper';
import images from 'src/assets/images';
import Touchable from 'src/Components/Custom/InputComponent/Touchable';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import Col from '../Col/Col';
import Row from '../Row/Row';
const { width, height } = Dimensions.get('window');
import CheckBox from '@react-native-community/checkbox';

const FilterModal = (props: any) => {
  const { toggleModal, isVisible, code, onVerify, setCode, resend } = props;

  const theme = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          backgroundColor: theme.colors.background,
          height: height / 1.15,
          width: width,
          bottom: 0,
          position: 'absolute',
          justifyContent: 'flex-start',
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
        imgIcon: {
          height: scaler(19),
          width: scaler(19),
          resizeMode: 'contain',
        },
        headerContainer: {
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: scaler(7),
          padding: scaler(23),
        },
        btnContainer: {
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: scaler(7),
          bottom: scaler(20),
          position: 'absolute',
          alignSelf: 'center',
          borderTopColor: theme.colors.gray,
          borderTopWidth: scaler(1),
          height: scaler(99),
          backgroundColor: theme.colors.white,
          width: width,
          paddingHorizontal: scaler(23),
        },
        clearBtn: {
          width: scaler(166),
          alignItems: 'center',
          justifyContent: 'center',
        },
        box: {
          paddingVertical: scaler(10),
          width: width - scaler(40),
          borderColor: theme.colors.gray,
          borderWidth: scaler(0.5),
          borderRadius: scaler(10),
          alignSelf: 'center',
          paddingLeft: scaler(10),
        },

      }),
    [theme.colors.white],
  );
  const renderService = (item: any) => {
    return (
      <Col style={styles.box}>
        <Typography fontSize={14} type={'medium'} color={theme.colors.text}>
          FITNESS
        </Typography>
        <Spacer size={scaler(10)} />
        {/* {item.data.map((area: any) => ( */}
        <Row style={{ height: scaler(35), alignItems: 'center' }}>
          <CheckBox
            style={{ height: 20, width: 20 }}
            boxType={'square'}
            disabled={false}
            onFillColor={theme.colors.primary}
            onCheckColor={theme.colors.white}
            onTintColor={theme.colors.primary}
            tintColors={{ true: theme.colors.primary }}
            animationDuration={0}
          //   value={area.checked}
          //   onValueChange={() => selectItem(item.id, area.id)}
          />
          <Col style={{ marginLeft: scaler(10) }}>
            <Typography
              fontSize={15}
              type={'regular'}
              color={theme.colors.text}>
              Hello
            </Typography>
          </Col>
        </Row>
        {/* ))} */}
      </Col>
    );
  };

  return (
    <Portal>
      <Modal
        visible={isVisible}
        dismissable={false}
        contentContainerStyle={styles.containerStyle}>
        <Row flex={0} style={styles.headerContainer}>
          <Typography
            type={'medium'}
            textAlign="center"
            fontSize={scaler(22)}
            variant="black">
            Filters
          </Typography>
          <TouchableOpacity onPress={() => toggleModal()}>
            <Image source={images.crossBlack} style={styles.imgIcon} />
          </TouchableOpacity>
        </Row>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={['a', 'b']}
          // extraData={data}
          renderItem={({ item }) => renderService(item)}
          // keyExtractor={(item: any) => item.id.toString()}
          ItemSeparatorComponent={() => <Spacer size={scaler(20)} />}
        />
        <Row flex={0} style={styles.btnContainer}>
          <TouchableOpacity onPress={() => onVerify()} style={styles.clearBtn}>
            <Typography fontSize={scaler(16)} color={theme.colors.primary}>
              CLEAR
            </Typography>
          </TouchableOpacity>
          <Touchable
            onPress={() => onVerify()}
            color={theme.colors.primary}
            style={{ width: scaler(166) }}
            labelStyle={{
              color: 'white',
              fontSize: scaler(18),
              fontFamily: 'Tahoma',
            }}>
            APPLY
          </Touchable>
        </Row>
      </Modal>
    </Portal>
  );
};

export default FilterModal;
