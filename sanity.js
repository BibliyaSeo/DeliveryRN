import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'qwoxusny',
  dataset: 'production',
  usecdn: true,
  apiVersion: '2022-11-29',
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);

export default client;
