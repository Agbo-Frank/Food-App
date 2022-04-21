import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { 
    View, Text, StyleSheet,
    ScrollView, Image 
} from 'react-native'
import Header from '../../components/Header'

const CartBox = () => {
    return(
        <View elevation={6} style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            position: 'relative',
            marginHorizontal: 20,
            marginBottom: 20
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Image source={require('../../assets/icons/delete.png')} style={{width: 24}} resizeMode='contain'/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../../assets/images/jellof_rice.png')} style={{width: 110}} resizeMode='contain' />
                <View>
                    <Text style={{
                        textTransform: 'capitalize',
                        fontSize: 14,
                        fontFamily: 'Poppins_400Regular'
                    }}>Jellof rice with chi</Text>
                    <Text style={{fontSize: 14, fontFamily: 'Poppins_400Regular'}}><Text style={{color: '#F27E77'}}>$</Text>2000</Text>
                </View>
            </View>
            <View style={style.qualityControl}>
                <View style={{
                    borderRadius: 5,
                    backgroundColor: '#E6E6E6',
                    paddingHorizontal: 8,
                    paddingVertical: 2
                }}
                >
                    <Text style={{color: '#F27E77', fontSize: 15, fontFamily: 'Poppins_400Regular'}}>-</Text>
                </View>
                <Text style={{ fontSize: 15, fontFamily: 'Poppins_400Regular'}}>1</Text>
                <View style={{
                    borderRadius: 5,
                    backgroundColor: '#F27E77',
                    paddingHorizontal: 8,
                    paddingVertical: 2
                }}>
                    <Text style={{color: 'white', fontSize: 15, fontFamily: 'Poppins_400Regular'}}>+</Text>
                </View>
            </View>
        </View>
    )
}

export default function Cart({navigation}){
    return(
        <Header title="your food cart" navigation={navigation}>
            <ScrollView>
                <CartBox />
                <CartBox />
                <CartBox />
                <CartBox />
                <CartBox />
            </ScrollView>
            <View elevation={6} style={{
                backgroundColor: 'white',
                borderRadius: 10,
                marginHorizontal: 20,
                marginVertical: 10
            }}>
                <View style={style.line}><Text style={style.lineText}>Sub Total</Text><Text style={style.lineText}>500</Text></View>
                <View style={{
                    ...style.line,
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderBottomColor: '#DAD3D3',
                    borderTopColor: '#DAD3D3'
                }}><Text style={style.lineText}>Delivery fee</Text><Text style={style.lineText}>100</Text></View>
                <View style={style.line}><Text style={style.lineText}>Total</Text><Text style={{...style.lineText, color: '#AB251D'}}>500</Text></View>
            </View>
        </Header>
    )
}

const style = StyleSheet.create({
    qualityControl: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 70
    },
    line:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 13,
        paddingHorizontal: 25
    },
    lineText:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        textTransform: 'capitalize'
    }
})