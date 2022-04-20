import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


let styleObj = {
  borderWidth: 1,
  borderRadius: 10,
  borderColor: '#807272',
  position: 'absolute',
}


export default function Form({ children, title, navigation }) {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.rectangle1}></View>
          <View style={styles.rectangle2}></View>
          <View style={styles.rectangle3}></View>
          <View style={styles.form} elevation={8}>
            <Text style={styles.textHeader}>{title}</Text>
            { children }
          </View>
          <View style={{ width: '100%', position: 'absolute', bottom: 10}}>
          <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.btn}
            onPress={() => navigation.navigate('PhoneNumberInput')}
            elevation={6}>
              <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center', color: '#807272'}}>
                {title == 'login' ? "Don't have an account?" : "Already have an account?" }
                {
                  title == 'Login' ? 
                  <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={{color: '#F27E77'}}>Sign Up</Text></Pressable> :
                  <Pressable onPress={() => navigation.navigate('Login')}><Text style={{color: '#F27E77'}}>Login</Text></Pressable>
                }
            </Text>
          </View>
        </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#FFF4F3',
    alignItems: 'center'
  },
  rectangle1: {
    ...styleObj,
    width: 362,
    height: 167,
    left: 68,
    top: 0,
  },
  rectangle2: {
    ...styleObj,
    width: 341,
    height: 222,
    left: -125,
    top: 109,
  },
  rectangle3: {
    ...styleObj,
    width: 250,
    height: 116,
    left: 231,
    top: 501,
  },
  form: {
    backgroundColor: 'white' ,
    borderRadius: 10,
    width: 340,
    paddingHorizontal: 26,
    paddingVertical: 20,
    paddingBottom: 50,
  },
  textHeader:{
    fontSize: 20,
    color: '#F27E77',
    fontFamily: 'Poppins_500Medium',
    textTransform: 'capitalize',
    marginBottom: 15
  },
  btn: {
    backgroundColor: '#F27E77',
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 8,
    marginHorizontal: '5%',
    width: '90%'
  },
  btnText: {
    textAlign:'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins_500Medium'
  }
})
