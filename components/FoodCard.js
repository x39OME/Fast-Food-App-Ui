import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ShoppingBagIcon } from 'react-native-heroicons/solid'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function FoodCard({item, index}) {
    const navigation = useNavigation();
  return (
    <Animatable.View delay={index*120} animation="slideInRight" className="w-56 h-70 my-5 mr-6 p-2 py-4 rounded-3xl"
    style={{backgroundColor: 'rgba(16, 18, 27, .4)'}}>

      {/* images */}
      <View className="flex-row justify-center">
        <Image source={item.image} className="h-32 w-32" />
      </View>

      {/* ingredients */}
      <View className="flex-1 px-4 pb-6">
        <Text className="text-white text-xl font-medium tracking-wider">{item.name}</Text>
        <Text className="text-gray-300">{item.ingredients}</Text>
      </View>

      {/* price */}
      <View className="flex-row justify-between items-center px-2 pt-1">
        <Text className="text-lg font-semibold text-gray-200">${item.price}</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('FoodDetails', {...item})} className="bg-white p-3 rounded-full">
          <ShoppingBagIcon size="16" color="black"/>
        </TouchableOpacity>
      </View>

    </Animatable.View>
  )
}
