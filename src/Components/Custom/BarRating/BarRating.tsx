/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import Row from 'src/Components/Shared/Row/Row';
import scaler from 'src/utils/scaler';
import Col from 'src/Components/Shared/Col/Col';

type Props = {
  arr: number[];
  rating: string;
  style?: ViewStyle;
};

function BarRating(props: Props) {
  //console.log('props => ', props);
  //const {width} = useWindowDimensions();
  const { arr, rating, style } = props;
  const theme = useTheme();
  const styles = StyleSheet.create({
    bar: {
      width: scaler(2),
      height: scaler(12),
      alignSelf: 'center',
      backgroundColor: 'red',
      marginLeft: scaler(2.5),
    },
  });

  return (
    <Row flex={0} style={style}>
      {arr.map((item: number) => {
        return (
          <Col
            flex={0}
            style={[
              styles.bar,
              {
                backgroundColor:
                  item <= Number(rating) ? theme.colors.primary : 'gray',
              },
            ]}
          />
        );
      })}
    </Row>
  );
}

export default BarRating;
