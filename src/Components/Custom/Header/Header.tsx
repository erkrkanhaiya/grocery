import { IconButton, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import Col from 'src/Components/Shared/Col/Col';
import { useNavigation } from '@react-navigation/native';

function Header(props: any) {
  const { title, rightComponent } = props;
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          height: scaler(55),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 1.0,
          elevation: 1,
        },
        heading: {
          width: scaler(200)
        }
      }),
    [],
  );

  return (
    <Row flex={0} style={styles.header}>
      <Col flex={0} style={{ width: scaler(20) }}>
        <IconButton
          icon="menu"
          // color={theme.colors.gray}
          size={30}
          onPress={() => navigation.toggleDrawer()}
        // style={{ left: scaler(-5) }}
        />
      </Col>
      <Col flex={0} style={styles.heading}>
        <Typography
          textAlign="center"
          numberOfLines={1}
          type="header"
          fontSize={24}
        // color={theme.colors.black}
        >
          {title}
        </Typography>
      </Col>
      <Col flex={0} style={{ width: scaler(40) }}>
        {rightComponent ?? null}
      </Col>
    </Row>
  );
}

export default Header;
