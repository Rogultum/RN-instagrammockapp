import React from "react";
import { ScrollView, Image, TouchableOpacity, Alert, View } from "react-native";
import styles from './Story.styles';
import Icon from "react-native-vector-icons/AntDesign";

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
            <View style={styles.addStoryContainer}>
                <Icon.Button name={"pluscircle"} size={18} borderRadius={15} iconStyle= {{marginTop:49, marginLeft:45}} backgroundColor={'transparent'} color={'#2962FF'}/>
            </View>
        </ScrollView>
    )
}

export default Story;
