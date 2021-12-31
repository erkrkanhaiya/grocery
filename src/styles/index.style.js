import { StyleSheet } from 'react-native';
import { colors } from '../constant/color';

// export const colors = {
//     black: '#1a1917',
//     gray: '#888888',
//     background1: '#B721FF',
//     background2: '#21D4FD'
// };

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        // backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.gray
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        // flex: 1
    },
    exampleContainer: {
        // paddingTop: 30,
        backgroundColor: colors.white

    },
    exampleContainerDark: {
        backgroundColor: colors.black,

    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingTop: 10, // for custom animation
        // backgroundColor: 'pink',
        paddingBottom: 0,
        marginBottom: 0

    },
    paginationContainer: {
        backgroundColor: 'red',
        paddingVertical: 5,
        //  top: -25
    },
    paginationDot: {
        backgroundColor: 'red'
        // width: 8,
        // height: 8,
        // borderRadius: 4,
        // marginHorizontal: 8
    }
});
