import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import Col from 'src/Components/Shared/Col/Col';

function TabScreenHeader(props: any) {
  const { title } = props;
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          height: scaler(55),
          width: '100%',
          justifyContent: 'center',
          paddingLeft: scaler(20),
          backgroundColor: theme.colors.white,
        },
      }),
    [theme.colors.white],
  );

  return (
    <Col flex={0} style={styles.header}>
      <Typography
        textAlign="left"
        type="header"
        fontSize={24}
        color={theme.colors.black}>
        {title}
      </Typography>
    </Col>
  );
}

export default TabScreenHeader;
