/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				amazon_blue: {
					light: '#232F3E',
					DEFAULT: '#131921',
				},
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [
		function ({ addBase }) {
			addBase({
				'*': {
					margin: '0',
					padding: '0',
					boxSizing: 'border-box',
				},
			});
		},
	],
};
