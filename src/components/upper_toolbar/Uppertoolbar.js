import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import styles from './Uppertoolbar.style';

function Uppertoolbar() {
    const alertFunction = () => (
        Alert.alert("Pressed")
    )
    
    return(
        <View style = {styles.container}>
            <Text style={styles.instagramtext}>Instagram</Text>
            <Pressable onPress={alertFunction}>
                <Text style={styles.pressable_text}>Likes</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.pressable_text}>Messages</Text>
            </Pressable>    
        </View>
    )
}


export default Uppertoolbar;
