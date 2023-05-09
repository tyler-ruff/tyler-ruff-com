import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Author {
    name: String,
    slug: String,
    image: SanityImageSource
};