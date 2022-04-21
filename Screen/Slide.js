import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, Pressible } from 'react-native';
import { useRef, useState } from 'react'
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import slideData from '../db/slideData';

const windowWidth = Dimensions.get('window').width;

export default function Slide({ navigation }) {
  const flatList = useRef()
  let [index, setIndex] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <FlatList 
          ref={flatList}
          data={slideData}
          initialScrollIndex={0}
          renderItem={({item, i}) =>(
            <View style={{width: windowWidth, overflow: 'hidden'}}>
              <Image 
              source={item.img}
              style={styles.img} 
              resizeMode='contain' />
              <View style={styles.indicators}>
                {
                  slideData.map((v, i) => {
                    if(i === index){
                      return (
                        <View 
                        style={{...styles.indicator, ...styles.activeIndicator}} 
                        key={i}></View>
                      )
                    }
                    else{
                      return (
                        <TouchableOpacity 
                        style={{...styles.indicator}}
                        onPress={() => {
                          setIndex(i)
                          flatList.current.scrollToIndex({
                            animated: true,
                            index: i,
                            viewPosition: 0
                          })
                        }}></TouchableOpacity >
                      )
                    }
                  })
                }
              </View>
              <View>
                <Text style={styles.textHeader}>{item.header}</Text>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          extraData={index}
          />
        </View>
        <TouchableOpacity 
        activeOpacity={0.8} 
        style={styles.btn}
        onPress={() => {
          setIndex(state => state = state + 1)
          if(index === 2 ){
            setIndex(0)
          }
          flatList.current.scrollToIndex({
            animated: true,
            index,
            viewPosition: 0
          })}
          }>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'white'
  },
  skip: {
    borderWidth: 1,
    borderColor: '#F27E77',
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: 10,
    width: '15%',
    margin: 25,
  },
  skipText: {
    color: '#F27E77',
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center'
  },
  textHeader:{
    fontSize: 35,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
    textTransform: 'capitalize'
  }, 
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16
  },
  img: {
    width: '90%',
    marginHorizontal: '5%'
  },
  indicators: {
    marginTop: 15,
    marginBottom: 30,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeIndicator: {
    width: 12, 
    height: 12, 
    backgroundColor: '#F27E77',
  },
  indicator: {
    backgroundColor: '#C4C4C4',
    width: 8, 
    height: 8,
    borderRadius: 50,
    marginHorizontal: 5
  },
  btn: {
    backgroundColor: '#F27E77',
    borderRadius: 15,
    paddingVertical: 12,
    marginVertical: 30,
    marginHorizontal: '5%',
    width: '90%'
  },
  btnText: {
    textAlign:'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins_500Medium'
  }
})
