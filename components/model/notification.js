import { View, Modal, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useContext } from 'react'
import { ModelContext } from '../../contex/modal'

function NotificationBox({title, children}){
    return(
        <View style={{marginTop: 10, marginHorizontal: 20}}>
            <Text style={{
                textTransform: 'capitalize', 
                fontSize: 20, 
                fontFamily: 'Poppins_400Regular'
            }}>{title}</Text>
            {children}
        </View>
    )
}

function Notify(){
    return(
        <View
        elevation={6}
        style={style.notifyContainer}>
            <View style={style.notifyImg}>
                <Image source={require('../../assets/images/Group.png')} />
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={{
                    fontSize: 14, 
                    fontFamily: 'Poppins_400Regular'
                }}>Your order from kilimanjaro was delivered</Text>
                <Text>1 Hour ago</Text>
            </View>
        </View >
    )
}

export default function Notification({opernNotification, setOpenNotification}){
    let { notification, toggleNotification } = useContext(ModelContext)
    return(
        <View>
            <Modal
            visible={notification}
            animationType="slide">
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20 }}>
                        <Pressable 
                        onPress={toggleNotification}
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
                        <Text style={{fontFamily: "Poppins_500Medium", fontSize: 21}}>Notifications</Text>
                        <View></View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <NotificationBox title='recent' >
                            <Notify />
                            <Notify />
                            <Notify />
                            <Notify />
                        </NotificationBox>
                        <NotificationBox title='yesterday' >
                            <Notify />
                            <Notify />
                            <Notify />
                            <Notify />
                        </NotificationBox>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    notifyImg: {
        borderRadius: 50, 
        backgroundColor: '#EBEBEB', 
        width: 50, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notifyContainer: {
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginBottom: 10,
        alignItems: 'center'
    }
})