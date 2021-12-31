/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Modal, Portal, Provider, useTheme } from 'react-native-paper';
import images from 'src/assets/images';
import Touchable from 'src/Components/Custom/InputComponent/Touchable';
import Center from 'src/Components/Shared/Center/Center';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import Row from '../Row/Row';

const MediaPickerModal = (props: any) => {
  const {
    toggleModal,
    isVisible,
    pickFromGallery,
    pickFromCamera,
    isDocument,
    uploadDocument,
    documentType,
  } = props;
  const theme = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          backgroundColor: theme.colors.white,
          padding: 20,
          bottom: scaler(50),
          position: 'absolute',
          height: scaler(186),
          width: scaler(330),
          alignSelf: 'center',
        },
        underlineStyleBase: {
          width: 50,
          height: 50,
          borderRadius: scaler(5),
        },

        underlineStyleHighLighted: {
          borderColor: '#03DAC6',
        },
      }),
    [theme.colors.white],
  );
  return (
    <Provider>
      <Portal>
        <Modal
          visible={isVisible}
          dismissable={false}
          contentContainerStyle={styles.containerStyle}>
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{
              position: 'absolute',
              height: scaler(50),
              width: scaler(50),
              top: scaler(0),
              right: scaler(0),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={images.crossBlack}
              style={{
                height: scaler(16),
                width: scaler(16),
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          <Center allAxis>
            <Typography
              type={'regular'}
              fontSize={scaler(18)}
              color={theme.colors.black}
              textAlign="center">
              {isDocument
                ? 'Choose from the files\n(.pdf,.jpg,.png)'
                : 'Choose from below'}
            </Typography>
            <Spacer size={22} />
            {isDocument ? (
              <Touchable
                onPress={() => {
                  toggleModal();
                  uploadDocument(documentType);
                }}
                contentStyle={{ width: scaler(190) }}
                color={'#FBFEFF'}
                labelStyle={{
                  fontSize: scaler(15),
                  color: theme.colors.text,
                  ...theme.fonts.regular,
                }}>
                Choose from file
              </Touchable>
            ) : (
              <Row
                style={{ width: scaler(180), justifyContent: 'space-between' }}>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                    pickFromGallery('gal');
                  }}>
                  <Image source={images.galleryPicker} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                    pickFromCamera('cam');
                  }}>
                  <Image source={images.cameraPicker} />
                </TouchableOpacity>
              </Row>
            )}
          </Center>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default MediaPickerModal;
