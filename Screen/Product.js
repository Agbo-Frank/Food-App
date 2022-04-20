import React from 'react'
import { 
    Text, 
    View, 
    Image, 
    Pressable, 
    StyleSheet, 
    TouchableOpacity,
    ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'


function QuantityControl(){
    return(
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
    )
}

function Row(){
    return(
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between',
            paddingVertical: 10
            }}>
            <View><Text style={style.tableText}>chicken</Text></View>
            <Text style={style.tableText}>300</Text>
            <QuantityControl />
        </View>
    )
}

export default function Product({navigation}){
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{backgroundColor: '#FDECEB'}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginVertical: 20
                }}>
                    <Pressable onPress={() => navigation.goBack()} elevation={6} style={style.icon}>
                        <FontAwesome name='chevron-left' color='#F27E77' size={16} />
                    </Pressable>
                    <Pressable onPress={() => navigation.goBack()} elevation={6} style={style.icon}>
                        <FontAwesome name='heart' color='#F27E77' size={16} />
                    </Pressable>
                </View>
                <Image source={require("../assets/images/jellof_rice2.png")} style={{maxWidth: 355, paddingHorizontal: 20}} resizeMode='contain'/>
            </View>
            <ScrollView style={{padding: 22}}>
                <Text style={{
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 26,
                    textTransform: 'capitalize'
                }}>Jellof Rice With Chicken and Plaintain </Text>
                <Text style={{
                    color: '#555151',
                    fontSize: 14,
                    fontFamily: 'Poppins_400Regular'
                }}>Lorem Ipsum magna est adipisicing anim irure laboris cillum nulla cupidat et do. Duis qui esse qui nisi reprenderit cupidata.</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                    <View>
                        <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 15}}>Price</Text>
                        <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 24}}>$2000</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 15}}>Quantity</Text>
                        <QuantityControl />
                    </View>
                </View>
                <View>
                    <View elevation={1} style={style.tableHeader}>
                        <Text style={style.tableText}>Item</Text>
                        <Text style={style.tableText}>Price</Text>
                        <Text style={style.tableText}>Quantity</Text>
                    </View>
                    <View elevation={1} style={{...style.tableHeader, flexDirection: 'column'}}>
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                    </View>
                </View>
            </ScrollView>
            <View style={{
                    backgroundColor: '#FDECEB', 
                    paddingHorizontal: 20,
                    paddingVertical: 10
                }}>
                <Text>Price Order</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 25, fontFamily: 'Poppins_400Regular'}}>$3000</Text>
                    <TouchableOpacity 
                    elevation={6} 
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: '#F27E77',
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 12
                    }}><Text style={{color: 'white', fontSize: 15, fontFamily: 'Poppins_500Medium'}}>Add to Cart</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    icon: {
        padding: 14,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    qualityControl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tableHeader:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#F7F7F7',
        marginVertical: 10
    },
    tableText:{
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        textTransform: 'capitalize'
    }
})