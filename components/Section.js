import React from 'react'
import { View, Text, FlatList, Image, Pressable } from 'react-native'

export default function Section({title, data, Component, func, navigation}){
    return(
        <View style={{marginVertical: 8}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{ textTransform: 'capitalize', fontFamily: 'Poppins_500Medium', fontSize: 15}}>{title}</Text>
                <Pressable onPress={func}>
                    <Text style={{ textTransform: 'capitalize', fontFamily: 'Poppins_400Regular', fontSize: 13, color: '#F27E77'}}>View all</Text>
                </Pressable>
            </View>
            <View style={{marginVertical: 10}}>
                <FlatList 
                data={data}
                renderItem={({item}) => <Component item={item} navigation={navigation}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}/>
            </View>
        </View>
    )
}