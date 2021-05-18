import React from 'react';
import {View, Text} from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'center' }}>
                <Text style={{fontSize:150, fontWeight:'bold', letterSpacing:5}}>Instagram</Text>
            </View>
        )
    }
}