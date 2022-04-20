import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Form from '../components/Form';


export default function Login({navigation}) {
    return (
      <Form title='Login' navigation={navigation}>
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
            <Text style={{color: '#807272', fontSize: 12}}>Remember Me</Text>
            <Text style={{color: '#F27E77', fontSize: 12}}>Forget Password?</Text>
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
  }
})
