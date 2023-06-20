import react from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import PageText from "../../components/PageText";

function Papel() {

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#94b8ef', '#005fa8']} style={styles.container}>
        <StatusBar></StatusBar>
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c3fffb']} style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <PageText title={"Reciclagem de Papel"} videoID={"DaTnsqQktag"} mainText={"A reciclagem de papel contribui diretamente para a preservação dos recursos naturais (matéria-prima, energia e água), redução da poluição e da geração de resíduos urbanos sólidos. É uma lógica simples: quanto mais papel é reciclado, menos madeira é usada para a produção de papel, ou seja, um número menor de árvores é derrubada. Tudo é um ciclo. O papel é reciclado para diferentes objetivos e isso também altera a qualidade para cada papel reciclado.\n\nDe uma forma geral, existem os papéis que podem ser reciclados e os papéis que não podem ser reciclados:"}
                    list1Title={"Papéis recicláveis:"}
                    list1={[
                        {key: "Papéis de jornais ou revistas;"},
                        {key: "Envelopes ou cartolinas;"},
                        {key: "Cadernos;"},
                        {key: "Papéis utilizados para impressões ou cópias em geral;"},
                        {key: "Listas telefônicas;"},
                        {key: "Caixas de papelão e embalagem longa vida."},
                        ]}
                    list2Title={"Papéis não recicláveis:"}
                    list2={[
                        {key: "Papéis utilizados para higiene;"},
                        {key: "Papéis metalizados (utilizados para embalagens de salgadinhos;"},
                        {key: "Papéis plastificados (como o utilizado em embalagem de sabão em pó);"},
                        {key: "Papel utilizado no cigarro."},
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

export default Papel