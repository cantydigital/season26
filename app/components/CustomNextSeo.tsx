import React, { useMemo } from "react";
import type { PropsWithChildren } from "react";
import { SeoType, MetaTagType, MetaAttributeType, OpenGraphType } from '@/types/post';

interface CustomNextSeoProps {
  seo: SeoType | null;
  slug: string;
}

// Helper function to resolve image URLs
const resolveImage = (image?: any) => {
  return image?.asset?.url ?? "";
};

// Helper function to get OpenGraph data
const getOpenGraph = (args: OpenGraphType) => {
  const { description, image, title, _type, siteName, url } = args;
  const getImage = image ? resolveImage(image) : null;
  const values = {
    _type,
    description,
    siteName,
    url,
    title,
    images: [{ url: getImage ?? '' }],
  };
  return values;
};

// Helper function to get meta attributes
const getMetaAttribute = (attrs: MetaAttributeType[] | undefined) => {
  if (!attrs) {
    return null;
  }
  const obj: Record<string, string> = {};
  attrs.map((i) => {
    Object.assign(obj, {
      [i?.attributeKey as string]:
        i.attributeType == "image"
          ? resolveImage(i?.attributeValueImage)
          : i.attributeValueString,
    });
  });
  return obj;
};

// Helper function to get meta objects
const getMetaObjects = (tags: MetaTagType[], allowIndexing?: boolean) => {
  const tagArray: any[] = [];
  tags.map(tag => {
    const excludeTag =
      !allowIndexing &&
      !!tag.metaAttributes?.find(
        i =>
          i?.attributeValueString?.includes('noindex') ||
          i?.attributeValueString?.includes('nofollow'),
      );
    if (!excludeTag) {
      const metaTag = getMetaAttribute(tag?.metaAttributes);
      if (metaTag) {
        tagArray.push(metaTag);
      }
    }
  });
  return tagArray;
};

const CustomNextSeo: React.FC<PropsWithChildren<CustomNextSeoProps>> = ({
  seo,
  children,
  slug,
}) => {
  const { additionalMetaTags, metaDescription, metaTitle, twitter, nofollowAttributes, seoKeywords } = seo || {};

  const tags = useMemo(
    () => (additionalMetaTags ? getMetaObjects(additionalMetaTags) : []),
    [additionalMetaTags]
  );
  
  const openGraph = useMemo(
    () => (seo?.openGraph ? getOpenGraph(seo?.openGraph) : undefined),
    [seo]
  );
  
  const url = (process.env.NEXT_PUBLIC_APP_URL ?? "") + (slug?.startsWith("/") ? slug : `/${slug}`);

  // Since we're using Next.js metadata API instead of next-seo, 
  // this component will just pass the SEO data to its children
  // The actual metadata is set in the page component using generateMetadata
  return <>{children}</>;
};

export default CustomNextSeo;
