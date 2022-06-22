import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Details from './screens/Details';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
  });

  if(!loaded) return null;

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      backround:"transparent"
    }
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Details' component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


