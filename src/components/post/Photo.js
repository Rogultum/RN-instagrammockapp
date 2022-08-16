import React from "react";
import { View,  Image } from "react-native";
import styles from './Photo.styles';

function Photo ({imgUrl}) {
    return(
        <View>
            <Image style = {styles.container} source={{uri: imgUrl}}/>

        </View>
    )
}

export default Photo;
