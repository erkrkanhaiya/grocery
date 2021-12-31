/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

{/* <MaterialIcons name="arrow-back" size={30} onPress={() => { Keyboard.dismiss() }} /> */ }


const Header = (prop) => {
  // navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
  return prop.setOptions({
    headerLeft: () => <>
      <View
        hitSlop={{
          // top: 0,
          // bottom: 20,
          // left: 50,
          // right: 50,
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 10
          // backgroundColor: 'pink',
          // width: '60%'
        }}>{
          prop.menu ?
            <IconButton icon="menu" size={30} onPress={() => { Keyboard.dismiss(), prop.toggleDrawer() }} />
            :
            <IconButton
              icon="keyboard-backspace"
              // color={theme.colors.white}
              size={25}
              onPress={() => { }}
            // style={{ left: scaler(-5) }}
            />

        }
      </View>
    </>,
    headerRight: () => <View style={{
      paddingRight: 10

    }}>{prop.rightItem}</View>, //{ prop.rightItem },

    headerTitle: () => <>
      <Text style={{
        fontSize: 20,
      }}>{prop.title}</Text>
    </>,


    // headerTitleAlign: 'center',
    headerStyle: [styles.headerShadow, { backgroundColor: prop.backgroundColor }],
    headerLayoutPreset: 'center',
  });
};
export default Header;
const styles = StyleSheet.create({
  headerShadow: {
    elevation: 3,
    shadowOpacity: 0.5,
    // paddingVertical:10,
    borderBottomWidth: 0.5,
    // paddingBottom:15
    // backgroundColor: 'red'
  },
  // addIcon: { height: 21, width: 20, resizeMode: 'contain', right: 2 },
});
