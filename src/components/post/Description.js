import React from "react";
import { View, Text, Image } from "react-native";
import styles from './Description.styles'

function Description({userName, numLikes, descriptionText, numComment, selfPp, postedTime}) {
    return(
        <View style={styles.container} >
            <Text style={styles.likeStyle}>{numLikes} likes</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.userNameStyle}>{userName}</Text>
                <Text style={styles.descriptionStyle} >{'\t\t\t\t\t   '}{descriptionText}</Text>
            </View>    
            <Text style={styles.commentStyle}>View all {numComment} comments.</Text>
            <View style = {styles.selfContainer}>
                <Image style={styles.selfPpStyle} source={{uri: selfPp}}></Image>
                <Text>   Add a comment...</Text>
            </View>
            <Text style = {styles.postedTimeStyle}>{postedTime} hours ago</Text>
        </View>
    )
}

export default Description;
