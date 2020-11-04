import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { CheckBox, Avatar, Card } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class ListMessageTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
            checked: false
        }


    }

    

    render() {
        var { width, height } = Dimensions.get('window')
        return (
            <Card>

                <View style={{
                    flexDirection: 'row'
                }}>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around'
                    }}>
                        <Avatar
                            containerStyle={{ borderWidth: 5, borderColor: '#e8e8e8', top: -10 }}
                            size="medium"
                            rounded
                            source={{
                                uri: this.state.message.img
                            }}
                        />
                        <View style={{ padding: 15, width: '75%' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.state.message.name}</Text>
                        <Text>{this.state.message.message}</Text>
                            <View style={{
                                flexDirection: 'row', marginTop: 15
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome style={{}} size={13} name={'calendar-o'} />
                                        <Text style={{ marginLeft: 5 }}>{this.state.message.date} </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', left: 60, alignItems: 'center' }}>
                                        <FontAwesome style={{}} size={13} name={'clock-o'} />
                                        <Text style={{ marginLeft: 5 }}>{this.state.message.time} </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <CheckBox
                            title=''
                            checked={this.state.checked}
                        />
                    </View>


                </View>

            </Card>
        )
    }
}