import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'bg-base': '#121212',
        'bg-white': '#fff',
        'bg-highlight': '#1a1a1a',
        'bg-press': '#000',
        'bg-elevated-base': '#242424',
        'bg-elevated-highlight': '#2a2a2a',
        'bg-elevated-press': '#000',
        'bg-bright-accent': '#1ed760',
        'bg-bright-accent-hover': '#1fdf64',
        'bg-tinted-base': '#232323',
        'text-base-light': '#fff',
        'text-base-dark': '#000',
        'text-sub': '#a7a7a7',
        'text-warn': '#ffa42ab',
        'text-link-sub': '#b3b3b3',
        'text-positive': '#117a37',
        'text-negative': '#f15e6c',
        'text-bright-accent': '#1ed760',
        'essential-base': '#fff',
        'essential-negative': '#e91429',
        'essential-sub': '#727272',
        'essential-bright-accent': '#1ed760'
      },
      width: {
        '324': '81rem'
      }
    }
  },
  plugins: []
};
export default config;
