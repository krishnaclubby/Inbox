import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text, FlatList, TouchableOpacity } from 'react-native';
import { CheckBox, Avatar, Card } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListMessageTile from './ListMessageTile';
export default class ListTile extends React.Component {

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
                    <TouchableOpacity key={index} style={{}}>
                        <ListMessageTile message={item} />
                    </TouchableOpacity>
                )
            }}
        />
        )
    }
}