import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

let t = null;
export default class AppBar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={{ height: 64, flexDirection: "row", backgroundColor: "#e8e8e8", elevation: 6 }}>
                <View style={{ flex: 1, padding: 25 }}>
                    <Ionicons style={{}} size={25} name={'menu-outline'} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold',color:'#42aaf5' }}>INBOX</Text>

                </View>

                <View style={{ flex: 1, flexDirection: "row-reverse", alignItems: "flex-end", margin: 25 }}>
                    <Avatar
                        containerStyle={{ borderWidth: 5, borderColor: '#e8e8e8', top: 17 }}
                        size="medium"
                        rounded
                        source={{
                            uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM'
                        }}
                    />
                </View>
            </View>
        )
    }
}