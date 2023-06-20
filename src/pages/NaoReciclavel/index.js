import react from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import PageText from "../../components/PageText";

function NaoReciclavel() {

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#f0f0f0', '#7d7d7d']} style={styles.container}>
        <StatusBar></StatusBar>
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c3fffb']} style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <PageText title={"Lixo não Reciclável"} videoID={"qlRXN2dOVdE"} mainText={"Materiais não recicláveis são aqueles constituídos por substâncias difíceis de se separar e cujos benefícios do processo de reciclagem não superam os custos. O grande volume de descarte desse tipo de resíduo tornou-se um problema ambiental, haja vista a demora na decomposição e os efeitos químicos e biológicos no ecossistema. Para solucionar essa questão, é necessário reduzir, reutilizar e, quando não for possível nenhuma das duas opções, é imprescindível o descarte adequado para assim reduzir os impactos ambientais."}
                    list1Title={"Lista de materiais não recicláveis:"}
                    list1={[
                        {key: "Papéis não recicláveis: papel-carbono, fotografia, papel-toalha, papel higiênico, guardanapos utilizados, papéis metalizados, adesivos, etiquetas, papéis plastificados ou revestidos com parafina, papel celofane, papel vegetal;"},
                        {key: "Vidros não recicláveis: frascos de medicamentos ou de produtos químicos, frascos de reagentes tóxicos, cerâmicas, lâmpadas, espelhos, cristais e vidros temperados planos;"},
                        {key: "Plásticos não recicláveis: embalagens metalizadas, plásticos do tipo celofane, plásticos termofixos (utilizados na indústria de eletrônicos) e acrílicos;"},
                        {key: "Metais não recicláveis: esponja de aço, grampos de papel e latas de embalagem de produtos químicos (tintas, medicamentos, agrotóxicos)."},
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

export default NaoReciclavel