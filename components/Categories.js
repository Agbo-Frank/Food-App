import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Categories({item}){
    return(
        <View style={{marginLeft: 15}}>
            <View style={{ borderRadius: 5, padding: 8, height: 50, marginVertical: 5, backgroundColor: 'white'}} elevation={5}>
                <Image source={item.img} style={{alignSelf:'center'}}/>
            </View>
            <Text style={{textAlign: 'center', textTransform: 'capitalize', fontFamily: 'Poppins_400Regular', fontSize: 10}}>{item.text}</Text>
        </View>
    )
}