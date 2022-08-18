import React from "react";
import { View, Image, Alert } from "react-native";
import styles from './Bottomtoolbar.styles';
import Icon from "react-native-vector-icons/MaterialIcons";

function Bottomtoolbar({selfPp}) {
    const goToPage = () => {
        Alert.alert("Go home.")
    }
    
    return(
        <View style={styles.container} >
            <Icon.Button style={styles.iconStyle} name="home" color={'black'} backgroundColor={'transparent'} size={30} onPress={goToPage}></Icon.Button>
            <Icon.Button style={styles.iconStyle} name="search" color={'black'} backgroundColor={'transparent'} size={30} onPress={goToPage}></Icon.Button>
            <Icon.Button style={styles.iconStyle} name="queue-play-next" color={'black'} backgroundColor={'transparent'} size={30} onPress={goToPage}></Icon.Button>
            <Icon.Button style={styles.iconStyle} name="shopping-bag" color={'black'} backgroundColor={'transparent'} size={30} onPress={goToPage}></Icon.Button>
            <Image style={styles.selfPpStyle} source={{uri:selfPp}} />
        </View>
    )
}

export default Bottomtoolbar;
