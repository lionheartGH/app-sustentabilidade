import react from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Reciclagem from "../Reciclagem";
import Papel from "../Papel";
import Vidro from "../Vidro";
import Plastico from "../Plastico";
import Metal from "../Metal";
import Organico from "../Organico";
import NaoReciclavel from "../NaoReciclavel";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function Home(){
    return(
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="recycle" component={Reciclagem}/>
            <Tab.Screen name="file-outline" component={Papel} />
            <Tab.Screen name="glass-fragile" component={Vidro} />
            <Tab.Screen name="bottle-soda-classic-outline" component={Plastico} />
            <Tab.Screen name="paperclip" component={Metal} />
            <Tab.Screen name="food-apple-outline" component={Organico} />
            <Tab.Screen name="trash-can-outline" component={NaoReciclavel} />
        </Tab.Navigator>
    )
}

function MyTabBar({ state, descriptors, navigation }) {
    return (
      <LinearGradient colors={['#fff', '#94b8ef', '#94ef9d', '#ef9494', '#e7ef94', '#efb894', '#7d7d7d']} locations={[0.1, 0.20, 0.35, 0.48, 0.62, 0.76, 0.92]} start={[x=0, y=0.5]} end={[x=1, y=0.5]} style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1
    }}>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1,flexDirection: 'row' , alignItems:'center', justifyContent: 'space-between' }}
            >
              <MaterialCommunityIcons name={route.name} size={50} style={{ color: isFocused ? '#673ab7' : '#222'}} />
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    );
  }

export default Home