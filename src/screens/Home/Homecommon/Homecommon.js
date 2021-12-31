/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { ImageBackground, StyleSheet, } from 'react-native';
// import { useTheme } from 'react-native-paper';
// import images from 'src/Assets/images';
// import Touchable from 'src/Components/Custom/InputComponent/Touchable';
// import Body from 'src/Components/Shared/Body/Body';
// import Col from 'src/Components/Shared/Col/Col';

import Col from 'src/Components/Shared/Col/Col';
import Container from 'src/Components/Shared/Container/Container';
import FilterModal from 'src/Components/Shared/Modal/FilterModal';
import Row from 'src/Components/Shared/Row/Row';

// import Padding from 'src/Components/Shared/Padding/Padding';
// import Spacer from 'src/Components/Shared/Spacer/Spacer';
// import scaler from 'src/utils/scaler';
// import * as RNLocalize from "react-native-localize";
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import FastImage from 'react-native-fast-image';
// import DimensionHandler from '../../Utilities/DimensionHandler';



// export default function Homecommon() {
//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }



export function renderItemList({ item, index }: any) {
    const { illustration, parallax, parallaxProps, even, title } = item;
    return (
        <>
            <Typography
                textAlign={'left'}
                fontSize={scaler(34)}
                type={'medium'}
                color={'#ffffff'}>
                {title}
            </Typography>

            {/* <Row flex={0}>
                <Col flex={1} style={{
                    margin: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <FastImage
                        source={{ uri: illustration }}
                        style={{
                            height: scaler(80),
                            width: scaler(80),
                            borderRadius: scaler(50),
                            // backgroundColor: Theme.color.shade,
                        }}
                    />
                    <Typography
                        textAlign={'left'}
                        fontSize={scaler(34)}
                        type={'medium'}
                        color={'#ffffff'}>
                        {title}
                    </Typography>


                </Col>
            </Row> */}


            {/* <Click
                style={{
                    height: DimensionHandler.getPerfectSize(165),
                    paddingHorizontal: DimensionHandler.getPerfectSize(40),
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
                onPress={() => {
                    NavigationService.navigate('AdvanceSearch');
                    // NavigationService.tabNavigate('Home');
                    dispatch(
                        updateAppState('advanceSearch', safeJSONParse(item.searchText)),
                    );
                }}>
                <FastImage
                    source={item.image ? { uri: item.image } : images.user}
                    style={{
                        height: DimensionHandler.getPerfectSize(100),
                        width: DimensionHandler.getPerfectSize(100),
                        borderRadius: DimensionHandler.getPerfectSize(50),
                        backgroundColor: Theme.color.shade,
                    }}
                />
                <View
                    style={{
                        flex: 4,
                        height: DimensionHandler.getPerfectSize(100),
                        justifyContent: 'center',
                        paddingHorizontal: DimensionHandler.getPerfectSize(30),
                    }}>
                    <AppText
                        fontSize={22}
                        fontFamily={'Gotham-Book'}
                        color={Theme.color.black}>
                        {item.notificationText}
                    </AppText>

                    <AppText
                        fontSize={18}
                        fontFamily={'Gotham-Book'}
                        color={Theme.color.shade}>
                        {item.created_at ? timeDiff(new Date(item.created_at)) : null}
                    </AppText>
                </View>
            </Click> */}
            {/* <AppBorder /> */}
        </>
    );
}