import { View, Text, TouchableOpacity, Image } from 'react-native'
import {FontAwesome6} from '@expo/vector-icons'
import React from 'react'

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={{height:55, width: 110, resizeMode: 'contain'}} source={require('../assets/instagram/fontlogo.png')}/>
        <TouchableOpacity>
          <FontAwesome6 name="chevron-down" size={13} color="black" style={{marginLeft: 5, marginTop: -5}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 15}}>
            <Image style={{height:30, width: 30}} source={require('../assets/instagram/like.png')}/>
            <View
              style={{
                position: 'absolute',
                top: 3, 
                right: 2, 
                width: 8, 
                height: 8, 
                borderRadius: 4, 
                backgroundColor: 'red',
              }}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={{position: 'relative'}}>
                <Image style={{height:30, width: 30}} source={require('../assets/instagram/message.png')}/>
                <View style={{position: 'absolute', height:15, width: 13, marginLeft: 16}}>
                    <Text style={{backgroundColor: 'red', 
                                  borderRadius: 7, 
                                  color: 'white', 
                                  fontSize: 8,
                                  textAlign: 'center', 
                                  textAlignVertical: 'center',
                                  overflow: 'hidden'
                                  }}>
                        5
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header