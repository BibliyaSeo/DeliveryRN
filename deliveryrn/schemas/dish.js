export default {
  title: 'Dish',
  name: 'dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: Rule => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    },
  ],
};
