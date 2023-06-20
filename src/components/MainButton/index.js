import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native"

const MainButton = (props) => {

    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}
              color={props.Color}
             onPress={props.Action}>
                <Text style={styles.texto}>{props.Value}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch'
    },
    button:{
        alignItems: 'center',
        backgroundColor: "#46c263",
        padding:12,
        fontSize: 18,
        borderRadius:4,
        marginTop:15,
    },
    texto:{
        fontSize:18,
        color: '#fff',
        fontWeight: 700
    }
})

export default MainButton;