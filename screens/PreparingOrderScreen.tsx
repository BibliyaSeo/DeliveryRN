import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import OrderLoading from '../components/animations/OrderLoading';
// import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <OrderLoading />
      {/* react-native-animatable 사용할 시 */}
      {/* <Animatable.Image
        source={require('위치/파일명.확장자')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center">
        주문 수락을 기다리는 중입니다!
      </Animatable.Text> */}
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
}
