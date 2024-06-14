import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        trattatello: ['Bookman', 'Bookman', 'serif'],
        trattatello1: ['Andale Mono', 'monospace'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
};

export default config;
