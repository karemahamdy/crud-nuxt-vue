/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist: [
    { pattern: /^bg-(primary|grey|success|warning|danger)-/ },
    { pattern: /^text-(primary|grey|success|warning|danger)-/ },
    { pattern: /^border-(primary|grey|success|warning|danger)-/ },
  ],
  theme: {
    extend: {
      colors: {
      // primary 
        primary: {
          25:  '#f0f3fa',
          50:  '#e1e7f4',
          100: '#cbd4ec',
          200: '#a2b3dd',
          300: '#7992ce',
          400: '#5373c0',
          500: '#3f5fac',
          600: '#375295',
          700: '#2c4277',
          800: '#21315a',
          900: '#16213c',
          950: '#0b101e',

        },
        // Grey palette
        grey: {
          25:  '#FDFDFD',
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E9EAEB',
          300: '#D5D7DA',
          400: '#A4A7AE',
          500: '#717680',
          600: '#535862',
          700: '#414651',
          800: '#252B37',
          900: '#181D27',
          950: '#0A0D12',
        },
        // Success palette
        success: {
          25:  '#F6FEF9',
          50:  '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027948',
          800: '#05603A',
          900: '#054F31',
          950: '#053321',
        },
        // Warning palette
        warning: {
          25:  '#FFFCF5',
          50:  '#FFFAEB',
          100: '#FEEFC7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#F79009',
          700: '#B54708',
          800: '#93370D',
          900: '#792E0D',
          950: '#4E1D09',
        },
        // Danger palette
        danger: {
          25:  '#FFFBFA',
          50:  '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B32318',
          800: '#912018',
          900: '#7A271A',
          950: '#55160C',
        },
      }
    }
  },
  plugins: [],
}
