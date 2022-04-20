import { 
    StyleSheet,
    Text, View, 
    Image, ImageBackground, 
    TouchableOpacity } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  
  
  export default function Verified({navigation}) {
      return (
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 25, color: '#F27E77', textAlign: 'center'}}>Verified</Text>
              <Text style={{fontFamily: 'Poppins_500Medium', textAlign: 'center', marginVertical: 20}}>Your phone has been verified!</Text>
            </View>
            <ImageBackground source={require('../assets/images/background.png')} style={styles.img} resizeMode='cover'>
              <Image source={require('../assets/images/Character.png')} style={{zIndex: 10, transform: [{translateY: 10}, {translateX: 45}]}}/>
              <Image source={require('../assets/images/Smartphone.png')} style={{transform: [{translateY: -20}]}} />
            </ImageBackground>
            <View style={{ width: '80%'}}>
              <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.btn}
                onPress={() => navigation.navigate('Location')}
                elevation={6}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
      );
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical: 50
    },
    inputLabel: {
      width: '25%', 
      alignItems: 'center',
      paddingHorizontal: 10, 
      paddingVertical: 10, 
      borderRadius: 8, 
      backgroundColor: '#E5E5E5'
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
      fontSize: 14,
      fontFamily: 'Poppins_500Medium'
    },
    img: {
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center', 
      width: 380, height: 263.31
    }
  })
  