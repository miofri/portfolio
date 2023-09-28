/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				darkPurple: '#150050',
				mediumPurple: '#3F0071',
				almostMagenta: '#FB2576',
				darkerMagenta: '#fb2576',
				customPink1: '#ffe6ef',
				customPink2: '#f4045f',
			},
			fontFamily: {
				mulish: ['Mulish', 'sans-serif'],
				philospoher: ['Philosopher', 'sans-serif'],
			},
			height: {
				'95pros': '95%',
			},
			width: {
				'98pros': '98%',
				'95pros': '95%',
				'90pros': '90%',
			},
			animation: {
				fadeIn: 'fadeIn 3s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'40%': { opacity: '0.3' },
					'60%': { opacity: '0.6' },
					'100%': { opacity: '1' },
				},
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
