/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'react-native-paper';
import { StyleSheet, ImageBackground } from 'react-native';
import React, { useMemo } from 'react';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import Col from 'src/Components/Shared/Col/Col';
import { useNavigation } from '@react-navigation/native';
import images from 'src/Assets/images';

function HomeHeader(props: any) {
  const { title } = props;
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
        },
        imgBackground: {
          height: scaler(140),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
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
    <Col flex={0} style={styles.header}>
      <ImageBackground
        style={styles.imgBackground}
        source={images.homeHeaderBack}>
        <Typography type={'header'} style={[styles.title, { fontSize: 24 }]}>
          <Typography type={'header'} style={styles.title}>
            Hi{' '}
          </Typography>
          {title},
          <Typography type={'header'} style={styles.title}>
            {' '}
            Welcome!
          </Typography>
        </Typography>
      </ImageBackground>
    </Col>
  );
}

export default HomeHeader;
