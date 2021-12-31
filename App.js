import Carousel from 'react-native-snap-carousel';
import { Platform, View, ScrollView, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {

  // _renderItem = ({ item, index }) => {
  //   return (
  //     <View style={styles.slide}>
  //       <Text style={styles.title}>{item.title}</Text>
  //     </View>
  //   );
  // }

  render() {
    return (
      <Text>ddd</Text>
      // <Carousel
      //   ref={(c) => { this._carousel = c; }}
      //   data={this.state.entries}
      //   renderItem={this._renderItem}
      //   sliderWidth={sliderWidth}
      //   itemWidth={itemWidth}
      // />
    );
  }
}