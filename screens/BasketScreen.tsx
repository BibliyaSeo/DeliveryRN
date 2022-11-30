import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../redux/slices/restaurantSlice';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../redux/slices/basketSlice';
import {XCircleIcon} from 'react-native-heroicons/solid';
import {urlFor} from '../sanity';

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item: any) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">장바구니</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color={'#00CCBB'} height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{uri: 'https://links.papareact.com/wru'}}
            className="h-7 w-9 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">50-75분 안에 배달 예정입니다</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">변경</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]: any) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{uri: urlFor(items[0]?.image).url()}}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">{items[0]?.price}원</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({id: key}))}>
                  삭제
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">금액</Text>
            <Text className="text-gray-400">{basketTotal}원</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">배달료</Text>
            <Text className="text-gray-400">3000원</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>총액</Text>
            <Text className="font-extrabold">{basketTotal + 3000}원</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
