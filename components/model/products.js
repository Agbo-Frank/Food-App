import { View, Modal, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { ModelContext } from '../../contex/modal'
import React, { useContext } from 'react'

function ProductBox(){
    return(
        <View elevation={6} style={style.productBox}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <FontAwesome name='heart-o' size={20} color='#F27E77'/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                <Image source={require('../../assets/images/jellof_rice.png')} />
                <View>
                    <Text style={{fontSize: 18, fontFamily: 'Poppins_400Regular', textTransform: 'capitalize'}}>
                        jellof rice
                    </Text>
                    <Text style={{color: '#4D4D4D', fontFamily: 'Poppins_400Regular', fontSize: 12, textTransform: 'capitalize'}}>
                        with plantain and chicken
                    </Text>
                    <Text style={{color: '#F27E77', fontFamily: 'Poppins_400Regular', fontSize: 18}}>$2000</Text>
                </View>
            </View>
        </View>
    )
}

export default function Products({}){
    let { product, toggleProduct } = useContext(ModelContext)
    return(
        <View>
            <Modal
            visible={product}><View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20 }}>
                    <Pressable 
                        onPress={toggleProduct}
                        elevation={6} 
                        style={{
                            padding: 14,
                            borderRadius: 10,
                            backgroundColor: 'white'
                    }}>
                        <FontAwesome 
                        name='chevron-left'
                        color='#F27E77'
                        size={16}/>
                    </Pressable>
                    <Text style={{fontFamily: "Poppins_500Medium", fontSize: 21}}>Popular food</Text>
                    <View></View>
                </View>
                <ScrollView>
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                </ScrollView>
            </View></Modal>
        </View>
    )
}

const style = StyleSheet.create({
    productBox:{
        backgroundColor: 'white', 
        // borderWidth: 1, 
        borderRadius: 10, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        marginBottom: 13
    }
})