/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-index': "url('/image/background-hero-index.jpg')",
        'banner-01': "url('/image/bg-banner-01.jpg')",
        'banner-02': "url('/image/bg-banner-02.jpg')",
        'hero-blog': "url('/image/background/hero-blog.jpg')",
        'hero-portfolio': "url('/image/background/hero-portfolio.jpg')",
        'hero-process': "url('/image/background/hero-process.jpg')",
        'hero-service': "url('/image/background/hero-service.jpg')",
        'hero-about': "url('/image/background/hero-about.jpg')",
        'hero-processItem': "url('/image/feature-02.jpg')",
      },
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'bebasNeue': ['var(--font-bebasNeue)'],
        'body': ['Helvetica Neue'],
        'roboto': ['var(--font-roboto)'],
        'raleway': ['var(--font-raleway)'],
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen90vh": "calc(90vh)",
        "screen80vh": "calc(80vh)",
        "screen75vh": "calc(75vh)",
        "screen65vh": "calc(65vh)",
        "screen50vh": "calc(50vh)",
        "screen47vh": "calc(47vh)",
        "screen40vh": "calc(40vh)",
        "screen25vh": "calc(25vh)",
        "screen20vh": "calc(20vh)",
        '64': '16rem',  // 64 pixels
        '96': '24rem',  // 96 pixels
        '128': '32rem', // 128 pixels
        '160': '40rem', // 160 pixels
        '192': '48rem', // 192 pixels
      }),
    },
    colors: {
      'white.25': 'rgba(255, 255, 255, 0.25);',
      'white.50': 'rgba(255, 255, 255, 0.50);',
      'white.75': 'rgba(255, 255, 255, 0.75);',
      'white.100': 'rgba(255, 255, 255, 1);',
      'black.100': 'rgba(0, 0, 0, 1);',
      'campaign.50':  '#E9EAEB',
      'campaign.100': '#C8CBCC',
      'campaign.200': '#A4A8AA',
      'campaign.300': '#808588',
      'campaign.400': '#646A6F',
      'campaign.500': '#495055',
      'campaign.600': '#42494E',
      'campaign.700': '#394044',
      'campaign.800': '#31373B',
      'campaign.900': '#21272A',
      'medRed.50':  '#f7ebed',
      'medRed.100': '#ecced3',
      'medRed.200': '#dfadb6',
      'medRed.300': '#d28c98',
      'medRed.400': '#c97382',
      'medRed.500': '#bf5a6c',
      'medRed.600': '#b95264',
      'medRed.700': '#b14859',
      'medRed.800': '#a93f4f',
      'medRed.900': '#9b2e3d',
      'darkBlue.50': '#e2e3e5',
      'darkBlue.100': '#b6b8be',
      'darkBlue.200': '#858993',
      'darkBlue.300': '#545a67',
      'darkBlue.400': '#2f3647',
      'darkBlue.500': '#0a1326',
      'darkBlue.600': '#091122',
      'darkBlue.700': '#070e1c',
      'darkBlue.800': '#050b17',
      'darkBlue.900': '#03060d',
      'medBlue.50': '#e3e4e8',
      'medBlue.100': '#b8bdc6',
      'medBlue.200': '#8991a0',
      'medBlue.300': '#5a6479',
      'medBlue.400': '#36435d',
      'medBlue.500': '#132240',
      'medBlue.600': '#111e3a',
      'medBlue.700': '#0e1932',
      'medBlue.800': '#0b142a',
      'medBlue.900': '#060c1c',
      'lightBlue.50': '#e7e9ee',
      'lightBlue.100': '#c2c8d5',
      'lightBlue.200': '#9aa4b9',
      'lightBlue.300': '#71809d',
      'lightBlue.400': '#526488',
      'lightBlue.500': '#344973',
      'lightBlue.600': '#2f426b',
      'lightBlue.700': '#273960',
      'lightBlue.800': '#213156',
      'lightBlue.900': '#152143',
      'lightRed.50': '#fdebeb',
      'lightRed.100': '#fbcece',
      'lightRed.200': '#f9aeae',
      'lightRed.300': '#f68d8d',
      'lightRed.400': '#f47474',
      'lightRed.500': '#f25c5c',
      'lightRed.600': '#f05454',
      'lightRed.700': '#ee4a4a',
      'lightRed.800': '#ec4141',
      'lightRed.900': '#e83030',
      'gray.050': '#F9FAFB',
      'gray.100': '#F3F4F6',
      'gray.200': '#E5E7EB',
      'gray.300': '#D1D5DB',
      'gray.400': '#9CA3AF',
      'gray.500': '#6B7280',
      'gray.600': '#4B5563',
      'gray.700': '#374151',
      'gray.800': '#1F2A37',
      'gray.900': '#111928',
      'tan.50': '#fafaf8',
      'tan.100': '#f4f2ee',
      'tan.200': '#eceae2',
      'tan.300': '#e4e1d6',
      'tan.400': '#dfdace',
      'tan.500': '#d9d4c5',
      'tan.600': '#d5cfbf',
      'tan.700': '#cfc9b8',
      'tan.800': '#cac3b0',
      'tan.900': '#c0b9a3',
      'primary': '#2499B5',
      'primaryLight': '#72A0B9',
      'primaryDark': '#61788C',
      'secondary': '#52717D',
      'sand': '#D9D4C5',
      'sandLight': '#EAE4D8',
      'danger': '#e3342f',
      'gray': '#f5f5f5',
      'medGray': '#A8A8A8',
      'darkGray': '#393939',
      'raspberry': '#A16285',
      'raspberryBright': '#F9A2D8',
      'raspberryLight': '#B7769C',
      'raspberryDark': '#895675',
      'raspberryBlack': '#4F3445',
      'portfolio': '#122C3A',
      'portfolioLight': '#193D4C',
      'portfolioDark': '#0A181E',
      'contact': '#6D6B3D',
      'contactLight': '#84804F',
      'contactDark': '#2D2C1B',
      'about': '#3E95C5',
      'aboutLight': '#4AB0DD',
      'aboutDark': '#357FA0',
      'link': 'rgba(243,24,80,1)',
      'hoverLink': 'rgba(209,32,61,1)',
      'lightGray': '#e1e1e1',
      'darkBlue': '#06070d',
      'hoverNav': 'rgba(97,120,140,1)',
      'darkBlueServices': '#305670',
      'campaign': '#495055',
      'campaignLight': '#636B70',
      'campaignCTA': '#F4A04E',
      legacy: {
        ivory: {
          50:  '#FDFCFB',
          100: '#FAF8F6',
          200: '#F5F2EF',
          300: '#EEEAE5',
          400: '#E5E0DA',
          500: '#DCD6CE',
          600: '#CFC9C1',
          700: '#BDB7AE',
          800: '#A49E96',
          900: '#8D8681',
        },
        sepia: {
          50:  '#EDEAE8',
          100: '#DCD6D2',
          200: '#C3BDB9',
          300: '#A79F9A',
          400: '#8F857F',
          500: '#5A4A42',
          600: '#4D3F39',
          700: '#3F332F',
          800: '#332A27',
          900: '#271F1D',
        },
        rose: {
          50:  '#FBEFEF',
          100: '#F5DFDD',
          200: '#EAC7C3',
          300: '#DDB1AA',
          400: '#D19A91',
          500: '#CFA8A0',
          600: '#BA948D',
          700: '#9D7C76',
          800: '#81645F',
          900: '#664E4A',
        },
        taupe: {
          50:  '#F6F1EC',
          100: '#EAE0D5',
          200: '#D7C2AD',
          300: '#C3A78A',
          400: '#AD8E6F',
          500: '#9D8775',
          600: '#886F5E',
          700: '#715B4C',
          800: '#5C493C',
          900: '#48382D',
        },
        wheat: {
          50:  '#FFF8EE',
          100: '#FCEFD9',
          200: '#F9DFB3',
          300: '#F5CF8D',
          400: '#F1C06A',
          500: '#E2B168',
          600: '#C99D54',
          700: '#AD8443',
          800: '#916B35',
          900: '#745427',
        },
      }

    },
  },
  plugins: [],
}
