import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import styles from './Uppertoolbar.style';
import Icon from "react-native-vector-icons/AntDesign";

function Uppertoolbar() {
    const alertFunction = () => (
        Alert.alert("Pressed")
    )
    
    return(
        <View style = {styles.container}>
            <Text style={styles.instagramtext}>Instagram</Text>
            <Icon.Button name="plussquareo" backgroundColor={'transparent'} color={'black'} size={25} iconStyle={{marginTop: 8,}}/>
            <Icon.Button name="hearto" backgroundColor={'transparent'} color={'black'} size={25} iconStyle={{marginTop: 8, marginLeft: 10}}/>
            <Icon.Button name="message1" backgroundColor={'transparent'} color={'black'} size={25} iconStyle={{marginTop: 8, marginLeft: 10}}/>
        </View>
    )
}


export default Uppertoolbar;
