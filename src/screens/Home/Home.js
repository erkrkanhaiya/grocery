import React, { Component } from 'react';
import {
    Platform, View, ScrollView, Text, StyleSheet, StatusBar, SafeAreaView,
    FlatList, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../styles/SliderEntry.style';
import SliderEntry from '../../components/SliderEntry';
import styles from '../../styles/index.style';
import { ENTRIES1, ENTRIES2, ENTRIES3 } from 'src/fakeData/entries';
import { renderItemList } from './Homecommon/Homecommon';
import { keyExtractor } from '../../common';
// import { colors } from '../constant';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import scaler from 'src/utils/scaler';
import { colors } from '../../constant';
import Header from '../../common/Header';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
        Header({
            ...this.props.navigation,
            // leftIcon: images.back,
            // leftClick: () => { this.goBack() },
            // backgroundColor: Colors.orange,
            title: 'Eg Mart',
            menu: true,
            rightItem: <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="search1" size={25} onPress={() => { this.props.navigation.navigate('Search') }} />
                <View style={{ width: 15 }} />
                <AntDesign name="bells" size={25} onPress={() => { this.props.navigation.navigate('Notification') }} />
                <View style={{ width: 15 }} />
                <AntDesign name="shoppingcart" size={25} onPress={() => { this.props.navigation.navigate('Cart') }} />
            </View>
        });
        // <Header
        //             title={"Home"}
        //             {...this.props.navigation}
        //         />
        // Header 
    }


    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }





    render() {
        const { slider1ActiveSlide } = this.state;
        return (
            <View style={styles.container}>
                {/* {this.gradient} */}
                {/* <LinearGradient
                        colors={[colors.background1, colors.background2]}
                        startPoint={{ x: 1, y: 0 }}
                        endPoint={{ x: 0, y: 1 }}
                        style={styles.gradient}
                    /> */}
                <ScrollView
                    style={styles.scrollview}
                    scrollEventThrottle={200}
                    directionalLockEnabled={true}
                    showsVerticalScrollIndicator={false}
                >


                    <FlatList
                        data={ENTRIES1}
                        keyExtractor={keyExtractor}
                        initialNumToRender={10}
                        horizontal
                        // numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        // columnWrapperStyle={{ backgroundColor: 'red' }}
                        contentContainerStyle={{ backgroundColor: colors.white, marginBottom: 5 }}
                        // renderItem={renderItemList}
                        renderItem={
                            ({ item }) => (
                                <TouchableWithoutFeedback onPress={() => showItemDetails(item.id)}>
                                    <View style={style.listItem}>
                                        {/* <Text style={styles.title}>{item.title}</Text> */}
                                        <Image
                                            source={{ uri: item?.illustration }}
                                            style={{
                                                height: scaler(60),
                                                width: scaler(60),
                                                borderRadius: scaler(40),

                                                // backgroundColor: Theme.color.shade,
                                            }}
                                        />
                                        <Text style={style.price}>{item.title}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }
                    />


                    <View style={styles.exampleContainer}>
                        <Carousel
                            ref={c => this._slider1Ref = c}
                            data={ENTRIES1}
                            renderItem={this._renderItemWithParallax}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            hasParallaxImages={true}
                            firstItem={SLIDER_1_FIRST_ITEM}
                            inactiveSlideScale={0.94}
                            inactiveSlideOpacity={0.7}
                            inactiveSlideShift={20}
                            // containerCustomStyle={styles.slider}
                            contentContainerCustomStyle={styles.sliderContentContainer}
                            loop={true}
                            loopClonesPerSide={2}
                            autoplay={true}
                            autoplayDelay={500}
                            autoplayInterval={3000}
                            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                        />
                        {/* <Pagination
                                dotsLength={ENTRIES1.length}
                                activeDotIndex={slider1ActiveSlide}
                                containerStyle={styles.paginationContainer}
                                dotColor={'rgba(255, 255, 255, 0.92)'}
                                dotStyle={styles.paginationDot}
                                inactiveDotColor={colors.black}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                carouselRef={this._slider1Ref}
                                tappableDots={!!this._slider1Ref}
                            /> */}
                    </View>

                    <View style={{ height: 5 }} />
                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={{ marginLeft: 15, marginTop: 8 }}>Poupler</Text>
                        <FlatList
                            style={{ margin: 5 }}
                            numColumns={3}                  // set number of columns 
                            columnWrapperStyle={style.row}  // space them out evenly
                            data={ENTRIES2}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center', }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Productlist')}
                                            style={{ borderWidth: 1, borderColor: colors.gray, padding: 5, borderRadius: 3 }}>
                                            <Image
                                                source={{ uri: item?.illustration }}
                                                style={{
                                                    height: scaler(110),
                                                    width: scaler(110),
                                                }}
                                            />

                                        </TouchableOpacity>
                                        <Text style={{ marginBottom: 10, marginTop: 5 }}>{item.title}</Text>

                                    </View>
                                )
                            }}
                        />
                    </View>


                    <View style={{ height: 5 }} />
                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={{ marginLeft: 15, marginTop: 8 }}>Daily</Text>
                        <FlatList
                            style={{ margin: 5 }}
                            numColumns={3}
                            columnWrapperStyle={style.row}
                            data={ENTRIES2}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center', }}>
                                        <View style={{ borderWidth: 1, borderColor: colors.gray, padding: 5, borderRadius: 3 }}>
                                            <Image
                                                source={{ uri: item?.illustration }}
                                                style={{
                                                    height: scaler(110),
                                                    width: scaler(110),
                                                }}
                                            />

                                        </View>
                                        <Text style={{ marginBottom: 10, marginTop: 5 }}>{item.title}</Text>

                                    </View>
                                )
                            }}
                        />
                    </View>




                    <View style={{ height: 8 }} />
                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={{ marginLeft: 15, marginTop: 8 }}>Latest</Text>
                        <FlatList
                            style={{ margin: 5 }}
                            numColumns={3}                  // set number of columns 
                            columnWrapperStyle={style.row}  // space them out evenly

                            data={ENTRIES3}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center', }}>
                                        <View style={{ borderWidth: 1, borderColor: colors.gray, padding: 5, borderRadius: 3 }}>
                                            <Image
                                                source={{ uri: item?.illustration }}
                                                style={{
                                                    height: scaler(110),
                                                    width: scaler(110),
                                                }}
                                            />

                                        </View>
                                        <Text style={{ marginBottom: 10, marginTop: 5 }}>{item.title}</Text>

                                    </View>
                                )
                            }}
                        />
                    </View>



                </ScrollView>


            </View>
        );
    }
}

const style = StyleSheet.create({
    rowAlignment: {
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    container: {
        // height: scaler(168),
        // width: scaler(319),
        // borderRadius: scaler(10),
        // padding: scaler(10),
        // backgroundColor: theme.colors.white,
        // alignSelf: 'center',
        // justifyContent: 'space-between',
    },
    row: {
        flex: 1,
        justifyContent: "space-around",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 40,

    },
    listItem: {
        maxWidth: Dimensions.get('window').width / 3,
        flex: 1,
        // backgroundColor: 'red',
        marginBottom: 10,
        borderRadius: 3,
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 15

    },


    listItem2: {
        maxWidth: Dimensions.get('window').width / 3,
        flex: 1,
        // backgroundColor: 'red',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3,
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 15

    },
    listItem3: {
        maxWidth: Dimensions.get('window').width / 3,
        flex: 1,
        // backgroundColor: 'red',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3,
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 15

    },

    row: {
        flex: 1,
        // justifyContent: 'space-between'
    }
});
