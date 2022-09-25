/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['**/*.{tsx,scss,sass}'],
	theme: {
		extend: {
			colors: {
				brand: {
					dark: '#5651e5',
					light: '#709dff',
				},
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
			},
			backgroundImage: {
				maldives: 'url("/assets/media/images/maldives.jpg")',
				borabora: 'url("/assets/media/images/borabora.jpg")',
				keywest: 'url("/assets/media/images/keywest.jpg")',
			},
		},
	},
	plugins: [],
};
