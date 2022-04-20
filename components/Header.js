import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { 
    View, Text, 
    Pressable 
} from 'react-native'

export default function Header({children, title, navigation}){
    return(
        <SafeAreaView style={{backgroundColor: 'white', flex:1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20 }}>
                <Pressable
                onPress={() => navigation.goBack()}
                elevation={6} 
                style={{
                    padding: 14,
                    borderRadius: 10,
                    backgroundColor: 'white'
                }}>
                    <FontAwesome name='chevron-left'
                    color='#F27E77'
                    size={16} />
                </Pressable>
                <Text style={{
                    fontFamily: "Poppins_500Medium", 
                    fontSize: 21,
                    textTransform: 'capitalize'}}>
                    {title}
                </Text>
                <View></View>
            </View>
            {children}
        </SafeAreaView>
    )
}