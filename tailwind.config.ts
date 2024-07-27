import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)',
        'content-linear': 'linear-gradient(rgba(0, 0, 0, 0.6) 0, var(--background-base) 100%), var(--background-noise)'
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
        'bg-header-home': '#101010',
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
      },
      height: {
        'header-top-bar': '4rem',
        'bg-content-linear': '332px'
      },
      padding: {
        'content-spacing': 'clamp(16px,16px + (100vw - 420*1px - 420*1px - 600px)/424*8,24px)'
      },
      zIndex: {
        'header-top-bar': '1',
        'main-content': 'auto',
        'scroll-bar': '2' // 1 + 1
      }
    }
  },
  plugins: []
};
export default config;
