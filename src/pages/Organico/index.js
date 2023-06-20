import react from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import PageText from "../../components/PageText";

function Organico() {

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#efb894', '#a83500']} style={styles.container}>
        <StatusBar></StatusBar>
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c3fffb']} style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <PageText title={"Reciclagem de Lixo Orgânico"} videoID={"ljurLVHpdaw"} mainText={"A reciclagem do lixo orgânico está relacionada com técnicas de sustentabilidade, uma vez que, se lançados em locais inapropriados podem causar impactos negativos no meio ambiente. Vale notar que no mundo, bilhões de toneladas de lixo orgânico são produzidas diariamente. Para tanto, a reciclagem do lixo orgânico é de suma importância e pode estar relacionada com o processo de compostagem e ainda com a produção de energia. No primeiro caso, ele é usado como adubo natural e no segundo, com a produção de biogás, um biocombustível composto principalmente de gás metano (CH4) e gás carbônico (CO2). Assim, a coleta desse tipo de lixo é realizada nos aterros sanitários, locais apropriados para o lançamento desses resíduos."}
                    list1Title={"Exemplos de Lixo Orgânico:"}
                    list1={[
                        {key: "Restos de alimentos (carne, vegetais, frutas, ossos, etc.);"},
                        {key: "Papel usado (higiênico, absorvente, etc.);"},
                        {key: "Sacos de café e chá;"},
                        {key: "Cascas de ovos e Sementes;"},
                        {key: "Folhas, caule, madeira;"},
                        {key: "Dejetos humanos."},
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

export default Organico