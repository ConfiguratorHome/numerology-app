import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: '#F1E4F3',
          100: '#DCBCE3',
          200: '#C690D1',
          300: '#B065BE',
          400: '#9F45B0',
          500: '#8F27A3',
          600: '#81249D',
          700: '#6F1F95',
          800: '#5F1B8C',
          900: '#41147D'
        },
        secondary: {
          50:`#FCF3FC`,
          100: '#F0E8F0',
          200: '#E2DAE2',
          300: '#CDC5CD',
          400: '#A7A0A8',
          500: '#857E86',
          600: '#5F585F',
          700: '#4C454C',
          800: '#2E282E',
          900: '#0E040E',
        }
      }
    },   
  },
  plugins: [],
};
export default config;
