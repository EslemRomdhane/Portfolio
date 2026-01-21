/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add borderColor extension for 'border' class
      borderColor: {
        'border': 'hsl(var(--border))',
      },
      // Add outlineColor extension for 'ring' class
      outlineColor: {
        'ring': 'hsl(var(--ring))',
      },
    },
  },
  plugins: [],
}