import React from 'react'
import {
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export const Myicons = (props) => (
    <TouchableOpacity onPress={props.onImagePress}>
        <Image
            source={props.source}
            style={[{ height: props.size, width: props.size }, props._style]}
            resizeMode={'contain'}
        />
    </TouchableOpacity>
)


export const Myphoto = (props) => (
    <Image
        source={props.source}
        style={[{ height: props.size, width: props.size }, props._style]}
        resizeMode={'contain'}
    />

)