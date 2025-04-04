'use client';

import { DefaultSeo } from 'next-seo';
import SEO from '../../seo-config'; // adjust path since seo.config.js is in /src

export default function SEOProvider() {
    return <DefaultSeo {...SEO} />;
}
