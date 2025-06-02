import { createClient } from 'next-sanity';

export const projectId = '02jhhvr4';
export const dataset = 'production';
export const apiVersion = '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true for production
});
