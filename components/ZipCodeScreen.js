import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList , TouchableHighlight,StyleSheet,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    
    { place: 'petchaburi', code: '90110' },
    { place: 'Suratthani', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chiangrai', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (

    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View>

<Text style={styles.medium}>{place}                {code}</Text>
    

        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View> 
            <ImageBackground source={require('../bg2.gif')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cover: {
        backgroundColor: '#000',
        width: '100%',
        height: 300,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    medium: {
        fontSize:30,
        color: 'white',
        paddingTop: 80,
    },
    box: {
        backgroundColor : 'red',
        opacity :30,
        width : 1000,
        height:10,
    },
    line:{
        backgroundColor : 'white',
        opacity : 80,
    },
    right: {
        fontSize:40,
        color: 'pink',
        paddingRight : 100, 
    },
    left: {
        fontSize:40,
        color: 'pink',
        paddingLeft : 100, 
    },
});

