import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';

function PageText(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.mainText}>{props.mainText || "This is a test page made for develop, it doesn't need to make any sense whatsoever."}</Text>
            <Text style={styles.secondTitle}>{props.list1Title}</Text>
            <FlatList
        scrollEnabled={false}
        data={props.list1}
        renderItem={({item}) => <Text style={styles.item}>{'\u2B24' + ' '}{item.key}</Text>}
            />
            <Text style={styles.secondTitle}>{props.list2Title}</Text>
            <FlatList
        scrollEnabled={false}
        data={props.list2}
        renderItem={({item}) => <Text style={styles.item}>{'\u2B24' + ' '}{item.key}</Text>}
            />
            <Text style={styles.mainText}>{props.secondaryText}</Text>
            <FlatList
        scrollEnabled={false}
        data={props.list3}
        renderItem={({item}) => <Text style={styles.item}>{'\u2B24' + ' '}{item.key}</Text>}
            />
            <Text style={styles.secondTitle}>Aprenda mais sobre {props.title}:</Text>
            <YoutubePlayer height={320} videoId={props.videoID} style={styles.youtube}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    mainText:{
        fontSize: 20,
        textAlign: 'justify',
        margin: 10,
        marginBottom: 0
    },
    title:{
        fontSize: 50,
        fontWeight: '700',
        alignSelf: 'center',
        textAlign: 'center'
    },
    secondTitle:{
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 20
    },
    youtube:{
        alignSelf: 'center'
    },
    item:{
        marginLeft: 10,
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10
    },
})

export default PageText