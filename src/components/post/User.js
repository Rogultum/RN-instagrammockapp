import React from "react";
import {View, Text, Image, Alert, TouchableOpacity} from "react-native";
import styles from './User.styles';
import Icon from "react-native-vector-icons/MaterialIcons";


function User({profilePhoto, userName}) {
    const alerterFunction = () => {
        Alert.alert("More")
    }
    
    return(
        <View>
            <View style={styles.container}>
                <Image style={styles.profile_photo} source = {{
                    uri: profilePhoto
                }}/>
                <Text style={styles.usernameText}>{userName}</Text>
                <Icon.Button name = "more-horiz" backgroundColor='transparent'
                color='grey'
                size={40}
                onPress={alerterFunction} ></Icon.Button>
            </View>
        </View>

    )
}

export default User;
