import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Buzz App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg:{
    },
    text:{
        height:50,
        textAlign:'center',
        fontSize: 30,
        color: 'ff0202',
        fontWeight: 'bold',
        backgroundColor: '#02def2'
    }
})
