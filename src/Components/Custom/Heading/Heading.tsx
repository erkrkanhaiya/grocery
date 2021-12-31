import React, { useMemo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
type HeadingProps = {
  firstHeading: string;
  secondHeading?: string;
  onPress: Function;
  quotes?: string;
};
function Heading(props: HeadingProps) {
  const { firstHeading, secondHeading, onPress, quotes } = props;
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        iconRow: {
          justifyContent: 'space-between',
          paddingHorizontal: scaler(19),
          marginTop: scaler(15),
        },
      }),
    [],
  );
  return (
    <>
      <Row style={styles.iconRow}>
        <Typography fontSize={scaler(16)} type="bold" variant="black">
          {firstHeading}
          {'\n'}
          <Typography fontSize={scaler(10)} type="regular" color="#73868E">
            {quotes}
          </Typography>
        </Typography>
        <TouchableOpacity onPress={() => onPress()}>
          <Typography fontSize={scaler(14)} type="bold" color="#0F9ED7">
            {secondHeading}
          </Typography>
        </TouchableOpacity>
      </Row>
    </>
  );
}

export default Heading;
