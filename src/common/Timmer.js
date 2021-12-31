import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';

const Timmer = ({ hoursMinSecs }) => {

    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);


    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0)
            // reset()
            secs > 0 ? alert('ji') : null
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    console.log(secs, 'secssecs')

    return (
        <View>
            <TouchableOpacity>
                <Text>{`${secs.toString().padStart(2, '0')}`}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Timmer;