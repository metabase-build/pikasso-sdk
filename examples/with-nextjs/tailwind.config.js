const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          DEFAULT: '#c1e64c',
          5: '#fafee7',
          10: '#f2fbcc',
          30: '#d0f066',
          50: '#9bc919',
        },
        secondary: {
          DEFAULT: '#6e43d4',
          10: '#e4e3fc',
          30: '#b1acf5',
          40: '#9a8bee',
          70: '#5a2fbf',
        },
        neutral: {
          DEFAULT: '#1f1f23',
          0: '#ffffff',
          10: '#eeeff0',
          30: '#cbcbd5',
          50: '#7c7d89',
          70: '#3d3d48',
        },
        accent: {
          success: '#6dbc00',
          warning: '#ffc42d',
          error: '#eb5849',
          info: '#4663e2',
          neon: '#d45cf8',
        },
        background: {
          warning: '#fff4c6',
          error: '#fee4e2',
          info: '#d9ebff',
        },
      },
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        1.25: '0.3125rem' /* 5px */,
        1.75: '0.4375rem' /* 7px */,
        7.5: '1.875rem' /* 30px */,
        15: '3.75rem' /* 60px */,
      },
      boxShadow: {
        'box-hover': '0px 4px 14px rgba(10, 6, 34, 0.12)',
        'box-pressed': ['0px 1px 10px rgba(0, 0, 0, 0.1)', '0px 2px 4px rgba(10, 6, 34, 0.08)'],
      },
    },
  },

  plugins: [],
};
