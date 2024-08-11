import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {StoriesData} from '../utils/StoriesData'
import {Ionicons} from '@expo/vector-icons'

const Stories = () => {
  return (
    <View style={{flexDirection: 'row', height: 100}}>
      {StoriesData.map((item) => {
        return (
            <View key={item.id} style={{marginLeft: 4}}>
                <TouchableOpacity>
                    <View style= {{borderWidth:2, borderColor: item.id !== 1 ?  '#ee2a7b' : 'black', borderRadius:40, padding: 2}}>
                        <Image style={{height: 70, width: 70, borderRadius:35}} source = {item.story.image}/>
                        {item.id === 1 && (
                            <View style={{
                                position: 'absolute', 
                                bottom: 0, 
                                right: 0,
                                backgroundColor: 'white',
                                borderRadius: 11 
                              }}>
                                <Ionicons name= "add-circle" size={22} color= "blue"/>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
                <Text style={{textAlign: 'center'}}>{item.id == 1 ? "My Story" : item.username}</Text>
            </View>
        );
      })}
    </View>
  )
}

export default Stories