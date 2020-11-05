import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text, FlatList, TouchableOpacity } from 'react-native';
import { CheckBox, Avatar, Card } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class ListTile_V2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.messages,
            checked: false
        }


    }



    render() {
        var { width, height } = Dimensions.get('window')
        return (
            <FlatList
                style={{}}
                horizontal={false}
                data={this.state.messages ? this.state.messages : []}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity key={index} style={{marginBottom:10}}>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    title=''
                                    checked={this.state.checked}
                                />
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between'
                                }}>
                                    <Avatar
                                        containerStyle={{ borderWidth: 5, borderColor: '#e8e8e8' }}
                                        size="medium"
                                        rounded
                                        source={{
                                            uri: item.img
                                        }}
                                    />
                                    <View style={{ padding: 2, width: '40%' }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text>{item.message}</Text>
                                       
                                    </View>
                                    <View>
                                        <Text style={{ marginLeft: 5 }}>{item.date} </Text>

                                        <Text style={{}}>{item.time} </Text>
                                    </View>
                                    <AntDesign style={{}} size={13} name={'right'} />



                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        )
    }
}