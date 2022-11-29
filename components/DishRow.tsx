import {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {addToBasket, selectBasketItems} from '../redux/slices/basketSlice';
import {urlFor} from '../sanity';

interface IDishRow {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function DishRow({
  id,
  name,
  description,
  price,
  image,
}: IDishRow) {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectBasketItems);

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  };

  console.log(items);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border-t p-4 border-gray-200`}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{price}원</Text>
          </View>
          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
