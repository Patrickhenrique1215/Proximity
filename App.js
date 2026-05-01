import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Deslizar from './src/screens/Deslizar';
import Chat from './src/screens/Chat';
import Notificacoes from './src/screens/Notificacoes';
import Perfil from './src/screens/Perfil';

import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import estiloglobal from './src/styles/estiloglobal';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: estiloglobal.cores.azulescurao,
        tabBarInactiveTintColor: '#636b78',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Deslizar') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Deslizar" component={Deslizar} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) return null;  


  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>

          {/* Tela principal com as tabs + botões no header */}
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={({ navigation }) => ({
              headerTitle: '',
              headerRight: () => (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Notificações')}
                    style={{ marginRight: 16 }}
                  >
                    <Ionicons name="notifications-outline" size={32} color={estiloglobal.cores.azulescurao} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Perfil')}
                    style={{ marginRight: 12 }}
                  >
                    <Ionicons name="person-circle-outline" size={35} color={estiloglobal.cores.azulescurao} />
                  </TouchableOpacity>
                </>
              ),
            })}
          />

          <Stack.Screen name="Notificações" component={Notificacoes} />
          <Stack.Screen name="Perfil" component={Perfil} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}