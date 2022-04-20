import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Splash() {
    return (
        <SafeAreaView style={styles.container}>
          <Image source={require('../assets/images/pexels-polina-tankilevitch-3872370-removebg-preview.png')} style={styles.img}/>
          <View>
            <Text style={styles.text1}>Hungry<Text style={{color: 'white'}}>Man</Text></Text>
            <Text style={styles.text2}>Healty Food for everyone</Text>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F27E77',
    position: 'relative'
  },
  text1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 40
  },
  text2: {
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    fontSize: 13
  },
  img: {
    position: 'absolute',
    top: -10,
    right: -10
  }
})
