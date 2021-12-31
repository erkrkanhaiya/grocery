import React from 'react'
import { TouchableHighlight, Pressable, Image, StyleSheet } from 'react-native'
import { Button, Text, } from 'react-native-paper';


export function GButton(props) {
    return (
        <Button
            contentStyle={
                [
                    {
                        height: props.height, width: props.width,
                        borderWidth: props.borderWidth,
                        backgroundColor: props.backgroundColor,
                        // borderRadius: props.borderRadius,
                        justifyContent: 'center', alignItems: 'center',

                    }, props._style
                ]}
            //    { paddingVertical: 8, backgroundColor: Colors.buttoncolor
            mode="contained"
            onPress={props.onPress}
            loading={props._loading}
            disabled={props?._loading}

        >
            {props.title}
        </Button>
    )


}


export function CommonButton(props) {
    return (
        <TouchableHighlight
            disabled={props.disabled}
            onPress={props.onPress}
            underlayColor={'#ddd'}
            style={[
                {
                    height: props.height, width: props.width,
                    borderWidth: props.borderWidth,
                    backgroundColor: props.backgroundColor,
                    borderRadius: props.borderRadius,
                    justifyContent: 'center', alignItems: 'center',

                }, props._style
            ]}>
            {props.title ?
                (<Text style={[{ color: props.textcolor, fontSize: 16 }, props.titleStyle]}>{props.title}</Text>)
                : <Image source={props.source} style={[{ height: 20, width: 20, }, props._style,]} resizeMode={'contain'}
                />}
        </TouchableHighlight>
    )
}




export const Cbutton = ({ navigation, _onPress }) => {
    const openHomePress = () => {
        _onPress
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={openHomePress}
                style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'grey' : 'blue' })}
            >
                <Text style={styles.btnText}>
                    Open Home!
                </Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});