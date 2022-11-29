import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import client, {urlFor} from '../sanity';
import CategoryCard from './CategoryCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "category"]
    `,
      )
      .then(data => setCategories(data));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}>

      {categories.map((category: any) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}
