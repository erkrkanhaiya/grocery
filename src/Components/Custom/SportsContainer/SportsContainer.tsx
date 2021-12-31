/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import Col from 'src/Components/Shared/Col/Col';
import { StyleSheet } from 'react-native';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import CheckBox from '@react-native-community/checkbox';
import Row from 'src/Components/Shared/Row/Row';
interface Props { }
function CoachSurvey1(props: any) {
  const { onNext, data, selectItem } = props;
  // console.log('surveyData => ', data);

  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        box: {
          paddingVertical: scaler(10),
          width: '100%',
          borderColor: theme.colors.primary,
          borderWidth: scaler(0.5),
          borderRadius: scaler(10),
          alignSelf: 'center',
          paddingHorizontal: scaler(15),
        },
      }),
    [theme.colors.primary],
  );

  return (
    <Col style={styles.box}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Typography fontSize={14} type={'medium'} color={theme.colors.text}>
          {item?.name}
        </Typography>
        <CheckBox
          style={{ height: 20, width: 20 }}
          boxType={'circle'}
          disabled={false}
          onFillColor={theme.colors.primary}
          onCheckColor={theme.colors.white}
          onTintColor={theme.colors.primary}
          tintColors={{ true: theme.colors.primary }}
          animationDuration={0}
          value={item.checked}
          onValueChange={() => selectItem(item?.id)}
        />
      </Row>
      <Typography fontSize={14} type={'regular'} color={theme.colors.text}>
        {_subAreas(item?.data)}
      </Typography>
    </Col>
  );
}
export default CoachSurvey1;
