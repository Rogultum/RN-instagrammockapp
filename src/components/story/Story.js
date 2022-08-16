import React from "react";
import { ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import styles from './Story.styles';

function Story() {
    const othersImg = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
    };
    const selfImg = {
        uri: 'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png'
    }
    const alertFunction = () => {
        Alert.alert("Pressed")
    }


    return(
        <ScrollView style={styles.container} horizontal = {true} showsHorizontalScrollIndicator = {false}>
            <TouchableOpacity onPress={alertFunction}>
                <Image style = {styles.stories} source={selfImg} />
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
