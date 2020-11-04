import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import AppBar from './AppBar';
import ListMessageTile from './ListMessageTile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';
import ListTile from './ListTile';
export default class InboxMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            loader: false,
            messages: [
                {
                    name: 'Willson', message: 'Updates availble', date: 'Fri Nov 1', time: '08:00 pm', img: 'https://i.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0'
                },
                {
                    name: 'Jackson', message: 'Week report is available', date: 'Fri Nov 2', time: '10:00 pm', img: 'https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU'
                },
                {
                    name: 'David', message: 'Updates availble', date: 'Fri Nov 3', time: '02:00 pm', img: 'https://i.picsum.photos/id/129/4910/3252.jpg?hmac=g1KzJMIp75lG_scR48R1baC6TjhVmkEyygSyngKYRsg'
                },
                {
                    name: 'Sam Alex', message: 'Updates availble', date: 'Fri Nov 5', time: '04:00 pm', img: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM'
                },
                {
                    name: 'Marcus', message: 'Updates availble', date: 'Fri Nov 6', time: '10:00 pm', img: 'https://i.picsum.photos/id/2/5616/3744.jpg?hmac=l1XcSPFigtRLcO2F6Li-t17EIeylkWH94Oowb4vzApk'
                },
            ]
        }


    }

    componentDidMount() {

    }

    render() {
        var { width, height } = Dimensions.get('window')
        return (
            <View style={{
            }}>
                <AppBar />
                <View style={{ flexDirection: 'row' ,paddingLeft:15,backgroundColor:'#e8e8e8'}}>


                    <SearchBar
                        placeholder=""
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                        containerStyle={{ width: '88%' }}
                        // inputContainerStyle={{ backgroundColor: '#e8e8e8' }}
                        showCancel
                        lightTheme round
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center',width:30,height:30,borderRadius:30,backgroundColor:'#42aaf5',left:3 }}>
                        <MaterialIcons style={{}} size={25} name={'filter-list'} />

                    </View>
                    </View>
                </View>
                <View style={{ marginBottom: 270 }}>
                    <ListTile messages ={this.state.messages} />
                   
                </View>
            </View>
        )
    }
}