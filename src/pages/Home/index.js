import react from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Reciclagem from "../Reciclagem";

const Tab = createMaterialTopTabNavigator();

function Home(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='reciclagem' component={Reciclagem}/>
        </Tab.Navigator>
    )
}

export default Home