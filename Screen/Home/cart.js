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
            position: 'relative'
            }}>
            {/* <View style={{flexDirection: 'row', justifyContent: 'right'}}>
                <Image source={require('../../assets/icons/delete.png')}  /> 
            </View> */}
            {/*<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                {/* <Image source={require('../../assets/images/jellof_rice.png')} />
                <View>
                    <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 14, textTransform: 'capitalize'}}>jellof rice</Text>
                    <Text><Text style={{color: '#F27E77'}}>$</Text>2000</Text>
                </View>
            </View>*/}
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
            <View>
                <CartBox />
            </View>
            <View elevation={6} style={{
                backgroundColor: 'white',
                borderRadius: 10,
                marginHorizontal: 20
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
        bottom: 5,
        right: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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