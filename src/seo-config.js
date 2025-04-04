// seo.config.js

const SEO = {
    title: 'Blue Prospect | Web Design, Video Production & Legacy Storytelling',
    description:
        'Blue Prospect is a creative studio offering web design, video production, and legacy video storytelling services. Based in San Diego, serving nationwide.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://blueprospect.com/',
        site_name: 'Blue Prospect',
        images: [
            {
                url: 'https://blueprospect.com/og-image.jpg', // replace with your actual social share image
                width: 1200,
                height: 630,
                alt: 'Blue Prospect Legacy Video',
            },
        ],
    },
    twitter: {
        handle: '@blueprospect', // optional if you have one
        site: '@blueprospect',
        cardType: 'summary_large_image',
    },
};

export default SEO;
