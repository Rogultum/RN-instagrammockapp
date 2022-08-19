import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginLeft: 12,
    },
    likeStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black'
    },
    descriptionContainer: {
        flexDirection: 'row',

    },  
    descriptionStyle: {
        fontSize: 12,
        color: 'black',
        marginTop: 1,
    },
    userNameStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        position: 'absolute',
    },
    commentStyle: {
        marginTop: 3,
    },
    selfContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    selfPpStyle:{
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
    },
    postedTimeStyle: {
        fontSize: 12,
        marginLeft: 2,
        marginTop:2,
    }
})
