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
				houzi: "url('/src/components/images/houzi.png')",
				profile: "url('/src/components/images/Untitled.png')",
				github: "url('/src/components/images/github-mark-white.png')",
				linkedin: "url('/src/components/images/In-White-128@2x.png')",
				typescriptLogo:
					"url('/src/components/images/Typescript_logo_2020.svg.png')",
				javascriptLogo: "url('/src/components/images/JavaScript-logo.png')",
				reactLogo: "url('/src/components/images/React-icon.svg.png')",
				postgresLogo:
					"url('/src/components/images/Postgresql_elephant.svg.png')",
				mongodbLogo:
					"url('/src/components/images/MongoDB_Logomark_ForestGreen.png')",
				aspnetcoreLogo: "url('/src/components/images/NET_Core_Logo.svg.png')",
				nodejs: "url('/src/components/images/light.svg')",
				tailwindcss:
					"url('/src/components/images/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg')",
			},
			colors: {
				darkerPurple: '#0B0029',
				darkPurple: '#160052',
				mediumPurple: '#3F0071',
				almostMagenta: '#FB2576',
				lessMagenta: '#fb3782',
				darkerMagenta: '#fb2576',
				customPink1: '#ffe6ef',
				customPink2: '#f4045f',
				customYellow: '#FFD600',
				customYellow2: '#FFE45C',
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
