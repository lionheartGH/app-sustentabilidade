import react from "react";
import { SafeAreaView, View, Text, Button, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';

function Info(){

    const navigation = useNavigation()

    function Continuar(){
        navigation.navigate('Home')
    }

    return(
        <SafeAreaView style={styles.background}>
            <Text>Info</Text>
            <Button title="Continuar" onPress={Continuar}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Info