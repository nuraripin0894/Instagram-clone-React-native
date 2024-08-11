import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, Feather, FontAwesome} from '@expo/vector-icons'

const BottomNavigation = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <TouchableOpacity>
            <View style= {{}}>
                <MaterialCommunityIcons name="home-variant" size={26} color="black" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style= {{}}>
                <Feather name="search" size={26} color="black" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style= {{}}>
                <FontAwesome name="plus-square-o" size={26} color="black" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style= {{}}>
                <Image style={{height: 22, width: 22}} source = {require('../assets/instagram/reels.png')} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style= {{}}>
                <Image style={{borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.2)', height: 26, width: 26, borderRadius:13}} source = {require('../assets/instagram/akashi.jpg')} />
            </View>
        </TouchableOpacity>
  </View>
  )
}

export default BottomNavigation