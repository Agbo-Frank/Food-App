import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { 
    View, Text, StyleSheet,
    ScrollView, Image 
} from 'react-native'
import Header from '../../components/Header'


function Favourite(){
    return(
        <View elevation={6} style={style.favouritBox}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#F27E77', fontFamily: "Poppins_500Medium", fontSize: 14}}>$2000</Text>
                <FontAwesome name='heart' size={20} color='#F27E77'/>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Image source={require('../../assets/images/jellof_rice.png')} />
                <Text style={{textAlign: 'center', fontFamily: 'Poppins_400Regular', textTransform: 'capitalize'}}>jellof rice</Text>
            </View>
        </View>
    )
}

export default function WishList({navigation}){
    return(
        <Header title="favourite" navigation={navigation}>
            <ScrollView>
                <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                </View>
            </ScrollView>
        </Header>
    )
}

const style = StyleSheet.create({
    favouritBox: {
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 13,
        margin: 10,
        // width: 167,
        maxWidth: 167
    }
})