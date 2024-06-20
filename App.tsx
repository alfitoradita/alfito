import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
// import loginScreen from './screen/loginScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const tabs = createBottomTabNavigator();
const Mainnavigasi = () => {
   return (
      <tabs.Navigator>
         <tabs.Screen name ="Home" component={HomeScreen}/>
         <tabs.Screen name ="profile" component={ProfileScreen}/>
         {/* <tabs.Screen name ="login" component={loginScreen}/> */}
      </tabs.Navigator>
   );
};

export default function App() {
   return (
      <NavigationContainer>
         <Mainnavigasi />
      </NavigationContainer>
   );
}
