import React from "react";
import { View, Text } from "react-native";
import Icon  from "react-native-vector-icons/SimpleLineIcons";
import styles from './Interactions.styles'

const Interactions = () => {
    return(
        <View style={styles.container}>
            <Icon style = {styles.icons} name="heart" size={30} color='black' />
            <Icon style = {styles.icons} name="pie-chart" size={30} color='black' />
            <Icon style = {styles.icons} name="paper-plane" size={30} color='black' />
            <Icon style = {styles.saveIcon} name="anchor" size={30} color='black' />
        </View>
    )
} 

export default Interactions;
