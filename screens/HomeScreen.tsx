import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="feautred"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Paid placements from our partners"
          featuredCategory="feautred"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Paid placements from our partners"
          featuredCategory="feautred"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
