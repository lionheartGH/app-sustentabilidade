import react from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import PageText from "../../components/PageText";

function Plastico() {

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#ef9494', '#a80000']} style={styles.container}>
        <StatusBar></StatusBar>
            <LinearGradient colors={['#fff', '#fff', '#fff', '#c3fffb']} style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <PageText title={"Reciclagem de Plástico"} videoID={"hwxIoW3cj4U"} mainText={"Os plásticos são produzidos a partir de resinas plásticas derivadas do petróleo e pertencem ao grupo dos polímeros e dividem-se em termoplástico e termorrígido ou termofixo."}
                    list1Title={"Termoplástico:"}
                    list1={[
                        {key: "Aqueles que podem ser remoldados sob aquecimento, uma vez que possuem estrutura menos rígida. Exemplos: PET, PEAD, PVC, PEBD, PP, PS, entre outros. Estes correspondem a 80% do plástico consumido e podem ser reciclados."},
                        ]}
                    list2Title={"Termorrígido ou termofixo:"}
                    list2={[
                        {key: "Aqueles que não derretem quando aquecidos. Vale dizer que estes não podem ser reutilizados nos processos comuns de reciclagem. Exemplos: PU, EVA e mais."},
                        ]}
                    secondaryText={"Agora que já conhecemos os tipos de plásticos, vamos conferir quais atualmente podem ser reciclados, confira:"}
                    list3={[
                        {key: "PET (Tereftalato de Polietileno): tipo de plástico muito popular, utilizado na indústria alimentícia para a produção de embalagens, como garrafas, e outras indústrias, como a produção da malha têxtil. Vale dizer que ele é rígido, transparente e é reciclado sozinho, por métodos mecânicos ou termomecânicos."},
                        {key: "PEAD (Polietileno de alta densidade): outro tipo de plástico muito popular, presente em tampas, embalagens de produtos químicos mais fortes, sacolas de supermercado, tambores ou garrafas de detergente, sacos de lixo. Utilizado em processo de reciclagem mecânica, termomecânica e mais."},
                        {key: "PVC (Policloreto de Vinila): usado em embalagens de alimentos, brinquedos, e materiais da construção civil (canos e tubos). A reciclagem de PVC segue caminhos diversos do PET."},
                        {key: "PEBD (Polietileno de baixa densidade): utilizado em embalagens de leite e iougurtes, sacolas, e materiais de saúde."},
                        {key: "PP (Polipropileno): utilizado em objetos do uso doméstico e em itens da construção civil."},
                        {key: "PS (Poliestireno): presente em produtos descartáveis e utilizado para armazenar alimentos como iogurtes e sorvetes."},
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

export default Plastico