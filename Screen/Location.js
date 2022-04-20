import { 
    StyleSheet,
    Text, View, 
    Image,
    TouchableOpacity } from 'react-native';
  import { FontAwesome } from '@expo/vector-icons';
  import { SafeAreaView } from 'react-native-safe-area-context';
  
  
  export default function Location({ navigation }) {
      return (
          <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
              <Image source={require('../assets/images/location.png')} style={{width: '100%'}} resizeMode='contain' />
              <View style={{marginVertical: 80}}>
                <Text style={{textAlign: 'center', fontFamily: 'Poppins_500Medium', fontSize: 25}}>Enable your Location</Text>
                <Text style={{textAlign: 'center', fontFamily: 'Poppins_400Regular', fontSize: 14}}>To search for the best nearby resturant, we want to know your current location</Text>
              </View>
              <View style={{ width: '100%', position: 'absolute', bottom: 10}}>
                <TouchableOpacity 
                  activeOpacity={0.8} 
                  onPress={() => navigation.navigate('HomePage')}
                  style={styles.btn}
                  elevation={6}>
                    <Text style={styles.btnText}>
                      <FontAwesome 
                      name='map-marker'
                      size={19}
                      iconStyle={{
                        marginRight: 5,
                      }}/>
                      Use your location
                    </Text>
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center', color: '#807272'}}>Skip for now</Text>
              </View>
            </View>
          </SafeAreaView>
      );
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
    }
  })
  