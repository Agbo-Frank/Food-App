import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Brand({item}){
    return(
        <View style={styles.container} elevation={6}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Image source={item.img}/>
            </View>
            <View>
                <Text style={{fontFamily:'Poppins_500Medium', fontSize: 14, textTransform: 'capitalize', marginVertical: 5}}>{item.text}</Text>
                <Text style={{color: '#8B8181', fontFamily: 'Poppins_400Regular', fontSize: 10}}>Exercitation magna magna reprehenderite.</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name='star' color='#FEAE64' size={11} style={{marginRight: 2}}/>
                        <FontAwesome name='star' color='#FEAE64' size={11} style={{marginRight: 2}}/>
                        <FontAwesome name='star' color='#FEAE64' size={11} style={{marginRight: 2}}/>
                        <FontAwesome name='star' color='#FEAE64' size={11} style={{marginRight: 2}}/>
                        <FontAwesome name='star' color='#FEAE64' size={11} style={{marginRight: 2}}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name='clock-o' size={18}/>
                        <Text>27</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 155,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 15
    }
})