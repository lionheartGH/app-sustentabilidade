import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Info from "./src/pages/Info";
import Home from "./src/pages/Home";
import { View, Text } from "react-native";


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Info"}>
        <Stack.Screen name="Info" component={Info} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
