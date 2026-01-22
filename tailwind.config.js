/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'slow-zoom': 'zoom 20s infinite alternate',
        'scroll': 'scroll 40s linear infinite', // <--- Ye zaroori hai
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        scroll: { // <--- Infinite Scroll Logic
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // 2 sets ke liye -50% perfect hai
        },
      },
    },
  },
  plugins: [],
};