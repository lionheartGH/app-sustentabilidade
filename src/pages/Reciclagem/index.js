import react from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import PageText from "../../components/PageText";

function Reciclagem() {

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#7EE9EF', '#80FF72']} style={styles.container}>
        <StatusBar></StatusBar>
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c3fffb']} style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <PageText title={"Reciclagem"} videoID={"Jr36f2wK4pk"} mainText={"A Reciclagem é uma forma de reaproveitamento das matérias primas que são descartadas. A Coleta Seletiva, hoje em dia, é uma maneira ecologicamente recomendada às populações, visto que sua função é reciclar a quantidade excessiva de material descartado pelo homem.\n \nOs postos de reciclagem (que dentre outras coisas recebem, por exemplo, óleo usado); bem como a separação de resíduos distintos, dispostos em lixeiras coloridas, onde cada cor significa um tipo de produto a ser descartado:"}
                    list1={[
                        {key: "O azul é destinado aos papéis e papelões;"},
                        {key: "O verde aos vidros;"},
                        {key: "O vermelho para os plásticos;"},
                        {key: "O amarelo para os metais;"},
                        {key: "O marrom para os resíduos orgânicos;"},
                        {key: "O cinza para materiais não reciclados."},
                        ]}
                    list2Title={"Vantagens da Reciclagem:"}
                    list2={[
                        {key: "Diminuição da poluição da água, do solo e do ar;"},
                        {key: "Redução da acumulação progressiva de resíduos;"},
                        {key: "Reaproveitamento dos materiais;"},
                        {key: "Melhoria da qualidade de vida da população;"},
                        {key: "Geração de empregos;"},
                        {key: "Formação e desenvolvimento da consciência ecológica;"},
                        {key: "Valorização da limpeza pública das cidades;"},
                        {key: "Responsabilidade social e ambiental;"},
                        {key: "Utilização racional dos recursos naturais."},
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

export default Reciclagem