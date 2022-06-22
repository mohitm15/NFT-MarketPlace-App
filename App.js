import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

export default function App() {
  return (
    <View >
      <Text>This is the first APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}


