/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./public/**/*.html', './src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				animateBG: 'animateBG 10s ease infinite',
				fadeIn: 'fadeIn 3s ease-in-out',
				fadeInleft: 'fadeInLeft 1.5s ease-in-out forwards',
			},
			backgroundImage: {
				boxGridHeaderBefore: 'linear-gradient(-45deg, #3a0547, #e6246e 50%)',
				houzi: "url('/src/assets/houzi.png')",
				profile: "url('/src/assets/dispic.png')",
				github: "url('/src/assets/github-mark-white.png')",
				linkedin: "url('/src/assets/linkedIn-White-128@2x.png')",
				typescriptLogo: "url('/src/assets/Typescript_logo_2020.svg.png')",
				javascriptLogo: "url('/src/assets/JavaScript-logo.png')",
				reactLogo: "url('/src/assets/React-icon.svg.png')",
				postgresLogo: "url('/src/assets/Postgresql_elephant.svg.png')",
				mongodbLogo: "url('/src/assets/MongoDB_Logomark_ForestGreen.png')",
				aspnetcoreLogo: "url('/src/assets/NET_Core_Logo.svg.png')",
				nodejs: "url('/src/assets/nodejs-light.svg')",
				tailwindcss:
					"url('/src/assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg')",
				styledComponentLogo: "url('/src/assets/styled-components.png')",
			},

			colors: {
				darkerPurple: '#0B0029',
				darkPurple: '#160052',
				mediumPurple: '#3F0071',
				buttonPurple: '#8b5cf6',
				almostMagenta: '#FB2576',
				lessMagenta: '#fb3782',
				darkerMagenta: '#fb2576',
				customPink1: '#ffe6ef',
				customPink2: '#f4045f',
				customYellow: '#FFD600',
				customYellow2: '#FFEB85',
				cardButton: '#893da1',
				cardButtonHover: '#b26dc7',
				cardBg: '#2e1065',
			},
			fontFamily: {
				mulish: ['Mulish', 'sans-serif'],
				philospoher: ['Philosopher', 'sans-serif'],
				ubuntu: ['Ubuntu', 'sans-serif'],
			},
			height: {
				'95pros': '95%',
			},
			keyframes: {
				animateBG: {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' },
				},
				fadeInLeft: {
					'0%': {
						transform: 'translateX(-10px)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
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
