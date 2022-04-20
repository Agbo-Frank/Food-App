import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Product({ item, navigation }){
    return(
        <View style={styles.container} elevation={5}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <FontAwesome name='heart-o' color='#F27E77' size={20}/>
            </View>
            <Pressable onPress={() => navigation.navigate('Product')}>
                <Image source={item.img} resizeMode='contain' style={{width: 110, height: 70}} />
            </Pressable>
            <View>
                <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 14, textTransform: 'capitalize'}}>{item.text}</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name='star' color='#FEAE64' size={10} style={{marginRight: 2}}/>
                    <FontAwesome name='star' color='#FEAE64' size={10} style={{marginRight: 2}}/>
                    <FontAwesome name='star' color='#FEAE64' size={10} style={{marginRight: 2}}/>
                    <FontAwesome name='star' color='#FEAE64' size={10} style={{marginRight: 2}}/>
                    <FontAwesome name='star' color='#FEAE64' size={10} style={{marginRight: 2}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5, 
        marginVertical: 10,
        padding: 10, 
        paddingBottom: 20,
        borderRadius: 5, 
        backgroundColor: 'white',
        maxWidth: 150
    }
})