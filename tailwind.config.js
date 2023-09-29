/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				fadeIn: 'fadeIn 3s ease-in-out',
			},
			backgroundImage: {
				boxGridHeaderBefore: 'linear-gradient(-45deg, #3a0547, #e6246e 50%)',
			},
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
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'40%': { opacity: '0.3' },
					'60%': { opacity: '0.6' },
					'100%': { opacity: '1' },
				},
			},
			screens: {
				'landscape-1024': {
					raw: `(width: 1024px) and (height: 600px)`,
				},
				'landscape-1280': {
					raw: `(width: 1280px) and (height: 800px)`,
				},
			},
			width: {
				'98pros': '98%',
				'95pros': '95%',
				'90pros': '90%',
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
