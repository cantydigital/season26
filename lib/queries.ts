import { client } from './sanity';
import { Post } from '@/types/post';

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "author": author->{name, "image": image.asset->url},
      excerpt,
      body,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      seo
    }`
  );
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post> {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "author": author->{name, "image": image.asset->url},
      body,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      seo
    }`,
    { slug }
  );
}

// Get related posts (posts with same categories, excluding current post)
export async function getRelatedPosts(slug: string, categories: string[]): Promise<Post[]> {
  return await client.fetch(
    `*[_type == "post" && slug.current != $slug && count((categories[]->title)[@ in $categories]) > 0] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "author": author->{name, "image": image.asset->url}
    }`,
    { slug, categories }
  );
}
