const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		colors: {
			customBlack: '#18181B'
		}
		},
		container: {
      padding: {
        DEFAULT: '1rem',
				sm: '1rem',
				md: '1rem',
				lg: '8rem',
				xl: '18rem',
				'2xl': '20rem',
      },
    },
		fontFamily: {
			sans: ['Lato', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
	darkMode: 'class'
}
