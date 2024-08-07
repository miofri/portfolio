export const portfolioItems = [
	{
		title: 'Social blogging app',
		description: `IN PROGRESS - social blogging app with multi users, following/follower system, dashboard, profile.`,
		links: {
			go: 'https://fs-slsh.fly.dev',
			sourceCode: 'https://github.com/miofri/s-psql-fe',
		},
		tags: [
			'TypeScript',
			'React/Vite',
			'Express.js',
			'PSQL',
			'Tailwind/DaisyUi',
			'Supabase',
		],
	},
	{
		title: 'Palworld breeding calculator',
		description: `This app helps in determining the result of breeding a particular Pal with another. The source CSV data is listed on my GitHub. This project taught me quite a bit - RTK Query, useContext, understanding & working with CSV files with MongoDB, etc.`,
		links: {
			go: 'https://palw.fly.dev',
			sourceCode: 'https://github.com/miofri/palw-fe',
		},
		tags: ['TypeScript', 'React', 'Express.js', 'MongoDB', 'styled-components'],
	},
	{
		title: 'Delivery calculator',
		description: `A delivery calculator that adheres to specific conditions (more details in the repo).	The calculator takes several inputs: the value of the cart in Euro, delivery distance, amount of items, as well as time of order. Based on the specification linked above, it will calculate the delivery fee. The app also features a dark/light theme toggle.`,
		links: {
			go: 'https://sk-delivery-calc.vercel.app',
			sourceCode: 'https://github.com/miofri/calculator-2024',
		},
		tags: ['TypeScript', 'React', 'styled-components', 'Jest'],
	},
	{
		title: 'E-Commerce',
		description: `A mock online-store that allows users to do basic operations such as registering, logging in, placing an order, and more. More details available in the source code.
		Note: takes at least 1 minute to load due to Azure free-tier.`,
		links: {
			go: 'https://houzi.vercel.app',
			sourceCode:
				'https://github.com/miofri/Fullstack-ASP-.NET-Core-React-Integrify-Project',
		},
		tags: [
			'C# / ASP.Net Core',
			'React',
			'PostgreSQL',
			'Redux-toolkit',
			'Azure',
		],
	},
	{
		title: 'E-Commerce - Frontend only',
		description:
			'The earlier, frontend only version of the above. Operations are handled by the API, as well as the database itself. Therefore, data may be nonsensical at times.',
		links: {
			go: 'https://sk-platzi.vercel.app',
			sourceCode:
				'https://github.com/miofri/Integrify-ECommerce-Project?tab=readme-ov-file',
		},
		tags: ['Typescript', 'React', 'Redux Toolkit', 'MUI'],
	},
	{
		title: 'Brewery App',
		description:
			'A simple app that fetches, displays, and searches for brewery companies from the given API endpoint, using React and TypeScript',
		links: {
			go: 'https://sk-brewery.vercel.app',
			sourceCode:
				'https://github.com/miofri/Integrify-project-8-breweries/tree/main',
		},
		tags: ['Typescript', 'React', 'styled-components', 'MUI'],
	},
];
