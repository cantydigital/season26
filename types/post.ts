import { PortableTextBlock } from 'next-sanity';

export interface Author {
  name: string;
  image: string;
}

export interface SeoType {
  _type?: "seo";
  nofollowAttributes?: boolean;
  metaDescription?: string;
  additionalMetaTags?: MetaTagType[];
  metaTitle?: string;
  seoKeywords?: string[];
  openGraph?: OpenGraphType;
  twitter?: Twitter;
}

export interface MetaTagType {
  _type: "metaTag";
  metaAttributes?: MetaAttributeType[];
}

export interface MetaAttributeType {
  _type: "metaAttribute";
  attributeKey?: string;
  attributeType?: string;
  attributeValueString?: string;
  attributeValueImage?: any;
}

export interface OpenGraphType {
  _type: "openGraph";
  title: string;
  url?: string;
  siteName?: string;
  description: string;
  image: any;
}

export interface Twitter {
  _type: "twitter";
  handle?: string;
  creator?: string;
  site?: string;
  cardType?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  mainImage: any;
  categories: string[];
  author: Author;
  excerpt?: string;
  body: PortableTextBlock[];
  estimatedReadingTime: number;
  seo?: SeoType;
}
