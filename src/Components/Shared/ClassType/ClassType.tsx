/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, useState } from 'react';
import { useTheme } from 'react-native-paper';
import Col from 'src/Components/Shared/Col/Col';
import { StyleSheet, Dimensions, Image } from 'react-native';
import scaler from 'src/utils/scaler';
import Typography from 'src/Components/Shared/Typography/Typography';
import Row from 'src/Components/Shared/Row/Row';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import images from 'src/Assets/images';

const { width } = Dimensions.get('window');
type Props = { headingColor?: string };
function ClassType(props: Props) {
  const { headingColor } = props;
  const theme = useTheme();
  const [data, setData] = useState([
    { checked: false, itemName: 'Private' },
    { checked: true, itemName: 'Group' },
  ]);
  const styles = useMemo(
    () =>
      StyleSheet.create({
        nameContainer: {
          backgroundColor: theme.colors.white,
          width: width,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
          paddingHorizontal: scaler(25),
          // marginTop: scaler(12),
          paddingTop: scaler(15),
          paddingBottom: scaler(25),
        },
        item: {
          marginTop: scaler(15),
          marginRight: scaler(70),
          alignItems: 'center',
        },
        radio: {
          height: scaler(16),
          width: scaler(16),
          resizeMode: 'contain',
        },
      }),
    [],
  );
  const selectedItem = (ind: number) => {
    setData(
      data.map((item, index) =>
        index === ind
          ? { ...item, checked: item.checked ? false : true }
          : { ...item, checked: false },
      ),
    );
  };
  const renderItem = ({ item, index }: any) => {
    return (
      <Row flex={0} style={styles.item}>
        <TouchableOpacity onPress={() => selectedItem(index)}>
          <Image
            source={item.checked ? images.radio_active : images.radio_inactive}
            style={styles.radio}
          />
        </TouchableOpacity>
        <Spacer horizontal size={scaler(10)} />
        <Typography fontSize={scaler(15)} color="#73868E" type="regular">
          {item.itemName}
        </Typography>
      </Row>
    );
  };
  return (
    <>
      <Col flex={0} style={styles.nameContainer}>
        <Row>
          <Col flex={0}>
            <Row>
              <Typography
                numberOfLines={1}
                fontSize={scaler(14)}
                type={'bold'}
                variant={headingColor ? headingColor : "black"}>
                CLASS TYPE
              </Typography>
            </Row>
          </Col>
        </Row>
        <FlatList horizontal={true} data={data} renderItem={renderItem} />
      </Col>
    </>
  );
}

export default ClassType;
