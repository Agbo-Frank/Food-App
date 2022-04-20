import { 
    StyleSheet,
    Text, View, 
    TextInput, 
    TouchableOpacity } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  
  
  export default function OTPInput({navigation}) {
      return (
          <SafeAreaView style={styles.container}>
            <View style={styles.container2} elevation={25}>
              <View style={{width: '80%', marginHorizontal: '10%', marginVertical: '15%'}}>
                <View>
                  <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 25, color: '#F27E77', textAlign: 'center'}}>OTP Verification</Text>
                  <Text style={{fontFamily: 'Poppins_500Medium', textAlign: 'center', marginVertical: 20}}>Please enter the verification code sent to(+234)08127451653</Text>
                </View>
                <View style={{marginVertical: 15, flexDirection: 'row'}}>
                  <View style={styles.inputLabel}><Text style={{textAlign: 'center', fontFamily: 'Poppins_500Medium'}}>+234</Text></View>
                  <View style={{...styles.inputLabel, width: '70%', marginLeft: '5%'}}><TextInput
                  /></View>
                </View>
                <View style={{ width: '100%', marginVertical: 40}}>
                  <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.btn}
                    onPress={() => navigation.navigate('Verified')}
                    elevation={6}>
                    <Text style={styles.btnText}>Verify</Text>
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center', color: '#807272'}}>
                    Didn’t receive the code?
                    <Text style={{color: '#F27E77'}}>Resend code</Text>
                </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
      );
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#FFF4F3',
    },
    container2: {
      position: 'absolute',
      bottom: 5,
      width: '95%',
      marginHorizontal: '2.5%',
      height: '85%',
      backgroundColor: 'white',
      borderRadius: 10
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
    }
  })
  