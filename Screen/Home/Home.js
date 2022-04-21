import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useContext } from 'react'
import Section from '../../components/Section';
import Categories from '../../components/Categories';
import categoryData from '../../db/categoryData';
import productData from '../../db/productData';
import Product from '../../components/Product';
import Brand from '../../components/Brand';
import brandData from '../../db/brandData';
import Notification from '../../components/model/notification'
import Products from '../../components/model/products'
import { ModelContext } from '../../contex/modal';

export default function Home({ navigation }) {
    let {toggleNotification, toggleProduct} = useContext(ModelContext)
    return(
        <SafeAreaView style={styles.container}>
            <Notification />
            <Products />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15, marginTop: 18}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/images/flat.png')}/>
                    <View style={{marginLeft: 8}}>
                        <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16}}>Good Morning</Text>
                        <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16}}>Frank!</Text>
                    </View>
                </View>
                <Pressable>
                    <View style={{position: 'relative'}}>
                        <Pressable onPress={toggleNotification}>
                            <FontAwesome name='bell-o' size={22} iconStyle={{fontFamily: 'Poppins_500Medium'}}/>
                        </Pressable>
                        <View style={{
                            position: 'absolute', 
                            backgroundColor: '#FF001C', 
                            top: 1, right: 1,
                            width: 10, height: 10,
                            borderRadius: 50
                        }}></View>
                    </View>
                </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.search}>
                    <FontAwesome name='search' size={18}/>
                    <TextInput placeholder='What do you want to eat'/>
                    <FontAwesome name='sliders' size={18}/>
                </View>
                <Section title='categories' Component={Categories} data={categoryData}/>
                <Section title='popular food' Component={Product} data={productData} func={toggleProduct} navigation={navigation}/>
                <Section title='Resturants' Component={Brand} data={brandData}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        backgroundColor: 'white'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#807272',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 5,
        marginBottom: 10,
    }
})