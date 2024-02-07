export const portfolioItems = [
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
		tags: ['Typescript', 'React', 'Styled Components', 'MUI'],
	},
];
