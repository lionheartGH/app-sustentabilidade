import react from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import PageText from "../../components/PageText";

function Vidro() {

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#94ef9d', '#00a832']} style={styles.container}>
        <StatusBar></StatusBar>
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c3fffb']} style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <PageText title={"Reciclagem de Vidro"} videoID={"R8OvQVV5BtM"} mainText={"Os vidros não são biodegradáveis e permanecem na natureza por cerca de dez mil anos. Por isso, o descarte desses materiais em locais inapropriados pode ser muito prejudicial ao meio ambiente. Dessa maneira, o melhor a se fazer é reciclar os materiais feitos em vidro."}
                    list1Title={"Vantagens da reciclagem do vidro:"}
                    list1={[
                        {key: "Diminuição do volume de lixo nos aterros;"},
                        {key: "Reaproveitamento do vidro em 100%;"},
                        {key: "Para cada tonelada de vidro reciclado, gasta-se menos 70% do que se gastaria para fabricar mais vidro;"},
                        {key: "Para cada tonelada de vidro reciclado, economiza-se 1,2 toneladas de matéria-prima."},
                        ]}
                    list2Title={"Tipos de vidros recicláveis:"}
                    list2={[
                        {key: "Garrafas de sucos, refrigerantes, cervejas e outros tipos de bebidas;"},
                        {key: "Potes de alimentos;"},
                        {key: "Cacos de vidros;"},
                        {key: "Frascos de remédios;"},
                        {key: "Frascos de perfumes;"},
                        {key: "Vidros planos e lisos;"},
                        {key: "Para-brisas;"},
                        {key: "Vidros de janelas;"},
                        {key: "Pratos, tigelas e copos."},
                        ]}
                    ></PageText>
                </ScrollView>
            </LinearGradient>
            </LinearGradient>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    topbar:{
        height: 80,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: "#94efa4"
    },
    topbargradient:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold'
    },
    scrollContainer:{
        alignItems: 'stretch',
        margin: 10,
        marginBottom: 25,
        borderWidth: 2,
        borderColor: "#94efa4",
        borderRadius: 10
    },
    scroll:{
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    scrollText:{
        margin: 10,
        color: 'black',
        fontSize: 100
    }
})

export default Vidro