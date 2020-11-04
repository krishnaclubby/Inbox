import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import AppBar from './AppBar';

export default class InboxMessages1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            loader: false
        }


    }

    componentDidMount() {
        
    }

    render() {
        var { width, height } = Dimensions.get('window')
        return (
            <View style={{
                flex: 1,
                alignItems: 'center', backgroundColor: '#fff',
            }}>
                <AppBar/>
                <View style={{ backgroundColor:  '#fff', width: '100%', alignItems: 'center' }}>
                    
                
                </View>
               
                
            </View>
        )
    }
}