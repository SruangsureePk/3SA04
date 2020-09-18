import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, CheckBox } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View style={styles.size}>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.box}>
                    <Text style={styles.big}>Zip Code</Text>
                    <Text style={styles.center}>Zip Code</Text>
                    <Text>{props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    size: {
        width: '100%',
    },
    box: {
        backgroundColor: '#000',
        width: '100%',
        height: '40%',
        opacity: 0.5,
        alignItems: 'center',
        paddingTop: 40,
    },
    big: {
        fontSize: 30,
        color: 'white'
    },
    center: {
        alignItems: 'center'
    }

});
