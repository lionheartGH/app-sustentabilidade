import react from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import PageText from "../../components/PageText";

function Metal() {

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#e7ef94', '#a8a500']} style={styles.container}>
        <StatusBar></StatusBar>
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c3fffb']} style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <PageText title={"Reciclagem de Metais"} videoID={"xouKg3XwrxY"} mainText={"O metal é um dos produtos mais utilizados nas tarefas do dia-a-dia. Encontramos embalagens de metais, fios e outros produtos metálicos em diversos produtos. Ao ser descartado por pessoas e empresas, pode passar por um processo de reciclagem que garante seu reaproveitamento na produção do metal reciclado. O metal reciclado tem praticamente todas as características do metal comum. Ele pode ser reciclado muitas vezes sem perder suas características e qualidade.O alumínio, por exemplo, pode ser usado sem limites. O aço após ser reciclado volta para a cadeia produtiva para ser transformado em latas e peças automotivas, por exemplo. A reciclagem do metal é de extrema importância para o meio ambiente. Quando reciclamos o metal ou compramos metal reciclado estamos contribuindo com o meio ambiente, pois este material deixa de ir para os aterros sanitários ou para a natureza (rios, lagos, solo, matas). Não podemos esquecer também, que a reciclagem de metal gera renda para milhares de pessoas no Brasil que atuam, principalmente, em cooperativas de catadores e recicladores de metal e outros materiais reciclados. O metal tem um alto valor para a reciclagem."}
                    list1Title={"Tipos de metais recicláveis:"}
                    list1={[
                        {key: "Latas de alumínio (refrigerante, cerveja, etc) e aço (latas de sardinha, molhos, óleo, etc.);"},
                        {key: "Arames, pregos, parafusos;"},
                        {key: "Fios de metal;"},
                        {key: "Tampas de metal;"},
                        {key: "Tubos de pasta;"},
                        {key: "Panelas sem cabo;"},
                        {key: "Arames;"},
                        {key: "Chapas de metal;"},
                        {key: "Objetos de alumínio (janelas, portas, portões, etc);"},
                        {key: "Fios e objetos de cobre;"},
                        {key: "Ferragens;"},
                        {key: "Canos de metal;"},
                        {key: "Molduras de quadros;"},
                        {key: "Tampinhas de garrafa;"},
                        {key: "Tampas metálicas de potes de iogurtes, margarinas, queijos, etc;"},
                        {key: "Papel alumínio."},
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

export default Metal