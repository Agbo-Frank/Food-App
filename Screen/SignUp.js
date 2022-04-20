import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Dimensions, Pressible } from 'react-native';
import { useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Form from '../components/Form';


export default function SignUp({navigation}) {
    return (
      <Form title='Sign Up' navigation={navigation}>
            <View>
              <View style={styles.inputField}>
                <FontAwesome 
                  name='user-o' 
                  size={13} 
                  color={'#807272'}/>
                <TextInput
                  style={styles.inputText}
                  placeholder='First Name'
                />
              </View>
              <View style={styles.inputField}>
                <FontAwesome 
                  name='envelope-o' 
                  size={13} 
                  color={'#807272'}/>
                <TextInput
                  style={styles.inputText}
                  placeholder='Email'
                />
              </View>
              <View style={{...styles.inputField, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome 
                    name='lock' 
                    size={15} 
                    color={'#807272'}/>
                  <TextInput
                    style={{...styles.inputText, width: '70%'}}
                    placeholder='Password'
                  />
                </View>
                <FontAwesome 
                  name='eye-slash' 
                  size={15} 
                  color={'#807272'}/>
              </View>
              <View style={{...styles.inputField, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome 
                    name='lock' 
                    size={15} 
                    color={'#807272'}/>
                  <TextInput
                    style={{...styles.inputText, width: '70%'}}
                    placeholder='Confirm Password'
                  />
                </View>
                <FontAwesome 
                  name='eye-slash' 
                  size={15} 
                  color={'#807272'}/>
              </View>
            </View>
            </Form>
    );
  }

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F27E77',
    alignItems: 'center',
    marginTop: 35
  },
  inputText: {
    marginHorizontal: 10,
    width: '100%'
  },
})
