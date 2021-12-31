/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'react-native-paper';
import { StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import React, { useMemo } from 'react';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import Col from 'src/Components/Shared/Col/Col';
import { useNavigation } from '@react-navigation/native';
import images from 'src/assets/images';
import Row from 'src/Components/Shared/Row/Row';

function ChatHeader(props: any) {
  const { title } = props;
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          width: '100%',
          height: scaler(50),
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          paddingHorizontal: scaler(20),
        },
        img: {
          height: scaler(20),
          width: scaler(20),
          resizeMode: 'contain',
        },
        title: {
          top: scaler(25),
          color: theme.colors.white,
          fontSize: scaler(15),
        },
      }),
    [theme.colors.white],
  );

  return (
    <Row flex={0} style={styles.header}>
      <Typography
        type={'medium'}
        fontSize={scaler(20)}
        color={theme.colors.black}>
        Messages
      </Typography>
      <Row
        flex={0}
        style={{
          width: scaler(70),
          paddingHorizontal: scaler(5),
          justifyContent: 'space-between',
        }}>
        <Pressable>
          <Image source={images.search} style={styles.img} />
        </Pressable>
        <Pressable>
          <Image source={images.menuDot} style={styles.img} />
        </Pressable>
      </Row>
    </Row>
  );
}

export default ChatHeader;
