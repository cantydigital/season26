import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'next-sanity';

interface PortableTextComponentProps {
  content: PortableTextBlock[];
}

const PortableTextComponent: React.FC<PortableTextComponentProps> = ({ content }) => {
  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?.url) {
          return null;
        }
        return (
          <div className="relative w-full h-96 my-8">
            <Image
              src={value.asset.url}
              alt={value.alt || ''}
              fill
              className="object-contain"
            />
          </div>
        );
      },
      callToAction: ({ value, isInline }: any) => {
        return isInline ? (
          <Link href={value.url} className="text-primary-600 hover:underline">
            {value.text}
          </Link>
        ) : (
          <div className="my-8">
            <Link 
              href={value.url}
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {value.text}
            </Link>
          </div>
        );
      },
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <Link 
            href={value.href} 
            rel={rel} 
            className="text-primary-600 hover:underline"
          >
            {children}
          </Link>
        );
      },
      internalLink: ({ children, value }: any) => {
        return (
          <Link href={value.slug} className="text-primary-600 hover:underline">
            {children}
          </Link>
        );
      },
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary-500 pl-4 italic my-6">{children}</blockquote>
      ),
      normal: ({ children }: any) => <p className="my-4">{children}</p>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 my-4">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
    },
  };

  return <PortableText value={content} components={components} />;
};

export default PortableTextComponent;
