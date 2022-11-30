import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectRestaurant} from '../redux/slices/restaurantSlice';
import {XMarkIcon} from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
            <XMarkIcon color={'white'} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">도움</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">도착 예정 시간</Text>
              <Text className="text-4xl font-bold">45-55 분</Text>
            </View>
            <Image
              source={{uri: 'https://links.papareact.com/fls'}}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            {restaurant.title}에서 음식을 준비하고 있습니다
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
