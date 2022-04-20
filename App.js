import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRef, useState } from 'react'
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './Screen/Splash'
import Slide from './Screen/Slide'
import Login from './Screen/Login'
import SignUp from './Screen/SignUp'
import PhoneNumberInput from './Screen/PhoneNumberInput'
import OTPInput from './Screen/OTPInput'
import Verified from './Screen/Verified'
import Location from './Screen/Location'
import Home from './Screen/Home/index'
import Product from './Screen/Product'

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else{
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Slide" component={Slide} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput} />
            <Stack.Screen name="OTPInput" component={OTPInput} />
            <Stack.Screen name="Verified" component={Verified} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="Product" component={Product} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  container2: {
    position: 'absolute', 
    bottom: 0, 
    width: '90%', 
    marginHorizontal: '5%',
    height: '90%',
  },
  btn: {
    backgroundColor: '#F27E77',
    borderRadius: 10,
    paddingVertical: 12,
    width: '100%'
  },
  btnText: {
    textAlign:'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins_500Medium'
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 380, height: 263.31
  }
})
