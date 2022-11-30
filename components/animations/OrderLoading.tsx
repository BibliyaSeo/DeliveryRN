import React from 'react';
import LottieView from 'lottie-react-native';
import lottieJson from '../../asstes/orderLoading.json';
import {Text, View} from 'react-native';

export default function OrderLoading() {
  return (
    <>
      <LottieView source={lottieJson} autoPlay loop />
      <View className="mt-96">
        <Text className="text-xl text-white font-bold text-center my-10">
          주문 수락을 기다리는 중입니다!
        </Text>
      </View>
    </>
  );
}
