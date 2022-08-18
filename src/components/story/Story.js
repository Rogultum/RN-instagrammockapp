import React from "react";
import { ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import styles from './Story.styles';

function Story({selfPp}) {
    const othersImg = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
    };

    const alertFunction = () => {
        Alert.alert("Pressed")
    }


    return(
        <ScrollView style={styles.container} horizontal = {true} showsHorizontalScrollIndicator = {false}>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={{uri:selfPp}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={othersImg} />
            </TouchableOpacity> 
        </ScrollView>
    )
}

export default Story;
