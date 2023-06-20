import react from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';
import MainButton from "../../components/MainButton";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Info(){

    const navigation = useNavigation()

    function Continuar(){
        navigation.navigate('Home')
    }

    return(
        <SafeAreaView style={styles.background}>
            <LinearGradient colors={['#9af6ab', '#00a89d']} style={styles.background}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name='recycle' size={100} style={{ color:'#000'}} />
                    <Text style={styles.title}>Recyclearn</Text>
                    <Text style={styles.subtitle}>Aprendendo sobre reciclagem</Text>
                    <Text style={styles.text}>Este app tem o propósito de ensinar um pouco sobre a reciclagem em geral e alguns dos tipos de reciclagem mais conhecidos, sendo estes a reciclagem de papel, vidro, plástico, metal e materiais orgânicos; e sobre lixo não reciclavel.</Text>
                    <MainButton Value="Continuar" Action={Continuar}></MainButton>
                    <Ionicons name="earth" size={250} color="black" style={styles.earth}/>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    box:{
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '70%',
        alignItems: 'center',
        alignSelf:'center',
        borderWidth: 1,
        borderColor: '#000'
    },
    title:{
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    subtitle:{
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 30,
        zIndex: 2
    },
    text:{
        fontSize: 15,
        textAlign: 'justify',
        marginBottom: 15,
        zIndex: 2
    },
    earth:{
        position: 'absolute',
        top: '40%',
        left: '5%',
        opacity: 0.1,
        zIndex: 1
    }
})

export default Info