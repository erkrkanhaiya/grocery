import React, { useMemo } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import images from 'src/Assets/images';
import Col from 'src/Components/Shared/Col/Col';
import Padding from 'src/Components/Shared/Padding/Padding';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';

function FileUploadContainer(props: any) {
  const {
    isRequired,
    title,
    icon,
    actionTitle,
    onPress,
    file,
    onRemove,
    fileType,
  } = props;
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: scaler(135),
          borderRadius: scaler(12),
          borderWidth: scaler(1),
          borderColor: theme.colors.border,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: theme.colors.white,
        },
        star: {
          position: 'absolute',
          alignSelf: 'flex-start',
          right: scaler(6),
          top: scaler(6),
        },
        fileHolderBox: {
          height: scaler(40),
          minWidth: scaler(180),
          paddingHorizontal: scaler(15),
          borderRadius: scaler(12),
          borderWidth: scaler(1),
          borderColor: theme.colors.border,
          borderStyle: 'dashed',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
        fileHolderRow: {
          width: '85%',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        thumbnail: {
          height: scaler(60),
          width: scaler(60),
          borderRadius: 10,
          marginRight: 10,
          resizeMode: 'contain',
        },
        fileNameRow: { alignItems: 'center', justifyContent: 'center' },
      }),
    [theme.colors.border, theme.colors.white],
  );

  return (
    <Col flex={0} style={styles.container}>
      {isRequired ? <Image source={images.star} style={styles.star} /> : null}
      <Padding horizontal>
        <Typography
          textAlign="center"
          type={'regular'}
          fontSize={scaler(13)}
          color={theme.colors.black}>
          {title}
        </Typography>
      </Padding>
      {file === null || file === undefined ? (
        <TouchableOpacity onPress={() => onPress()}>
          <Row style={styles.fileHolderBox}>
            <Image
              source={icon}
              style={{ marginRight: scaler(5) }}
              resizeMode={'contain'}
            />
            <Typography
              type={'regular'}
              fontSize={12}
              color={theme.colors.text}>
              {actionTitle}
            </Typography>
          </Row>
        </TouchableOpacity>
      ) : (
        <Row style={styles.fileHolderRow}>
          <Row style={styles.fileNameRow}>
            <Image
              source={
                file.type.split('/')[0] === 'video'
                  ? images.videoPlayer
                  : file.type.split('/')[0] === 'image'
                    ? { uri: file.uri }
                    : images.pdfThumbnail
              }
              style={styles.thumbnail}
              resizeMode={'contain'}
            />
            <Col flex={0} style={{ width: scaler(180) }}>
              <Typography type={'regular'} fontSize={10} color={'#A8B9C2'}>
                {file?.name}
              </Typography>
            </Col>
          </Row>
          <Typography
            type={'regular'}
            fontSize={10}
            color={'#A8B9C2'}
            accessibilityRole={'button'}
            accessibilityLiveRegion={'polite'}
            onPress={() => onRemove(fileType)}>
            Remove
          </Typography>
        </Row>
      )}
    </Col>
  );
}

export default FileUploadContainer;
