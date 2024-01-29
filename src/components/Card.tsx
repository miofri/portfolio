import React from 'react';

export const Card = () => {
	return (
		<section
			className="flex flex-col
			gap-10 sm:gap-20 md:gap-20 lg:gap-12 xl:gap-0 2xl:gap-10
			h-auto min-h-screen bg-darkPurple
			mb-98 overflow-visible items-center"
		>
			<div className="mt-20 h-fit w-fit text-center">
				<div className="box-grid-header">
					<h2>PROJECTS</h2>
				</div>
				<div className="box-grid-header w-full ">
					<p>More to come!</p>
				</div>
			</div>

			<div
				className="h-full lg:h-5/6
				w-full lg:w-11/12 xl:w-10/12
				mb-10 2xl:mb-20
				xl:mt-10
				flex flex-col justify-center items-center
				gap-1
				"
			>
				<div className="box-grid-portfolio">
					<div className="w-10/12 h-fit py-16">
						<h4>E-Commerce</h4>
						<p>
							A mock online-store that allows users to do basic operations such
							as registering, logging-in, placing an order, and more. More
							details available in the source code. <br /> Note: takes a while
							to load due to Azure free-tier.
						</p>
						<div className="flex gap-3 lg:mt-5">
							<button>
								<a href="https://houzi.vercel.app">Go</a>
							</button>
							<button>
								<a href="https://github.com/miofri/Fullstack-ASP-.NET-Core-React-Integrify-Project">
									Source code
								</a>
							</button>
						</div>
						<div className="flex flex-row flex-wrap gap-2 text-xs mt-4 font-mulish">
							<div className="box-grid-portfolio-tags">C# / ASP.Net Core</div>
							<div className="box-grid-portfolio-tags">React</div>
							<div className="box-grid-portfolio-tags">PostgreSQL</div>
							<div className="box-grid-portfolio-tags">Redux-toolkit</div>
							<div className="box-grid-portfolio-tags">Azure</div>
						</div>
					</div>
				</div>

				<div className="box-grid-portfolio">
					<div className="w-10/12 h-fit py-16">

						<h4 className=" text-5xl text-darkPurple font-mulish font-black">
							E-Commerce - Frontend only
						</h4>
						<p>
							The earlier, frontend only version of the above. Operations are handled by the API, as well as the database itself. Therefore, data may be nonsensical at times.
						</p>
						<div className="flex gap-3 lg:mt-5">
							<button>
								<a href="https://sk-platzi.vercel.app">Go</a>
							</button>
							<button>
								<a href="https://github.com/miofri/Integrify-ECommerce-Project?tab=readme-ov-file">
									Source code
								</a>
							</button>
						</div>
						<div className="flex flex-row flex-wrap gap-2 text-xs mt-4 font-mulish">
							<div className="box-grid-portfolio-tags">Typescript</div>
							<div className="box-grid-portfolio-tags">React</div>
							<div className="box-grid-portfolio-tags">Redux Toolkit</div>
							<div className="box-grid-portfolio-tags">MUI</div>
						</div>
					</div>
				</div>

				<div className="box-grid-portfolio">
					<div className="w-10/12 h-fit py-16">
						<h4 className=" text-5xl text-darkPurple font-mulish font-black">
							Brewery App
						</h4>
						<p>
							A simple app that fetches, displays, and searches for brewery companies from the given API endpoint, using React and TypeScript
						</p>
						<div className="flex gap-3 lg:mt-5">
							<button>
								<a href="https://sk-brewery.vercel.app">Go</a>
							</button>
							<button>
								<a href="https://github.com/miofri/Integrify-project-8-breweries/tree/main">
									Source code
								</a>
							</button>
						</div>
						<div className="flex flex-row flex-wrap gap-2 text-xs mt-4 font-mulish">
							<div className="box-grid-portfolio-tags">Typescript</div>
							<div className="box-grid-portfolio-tags">React</div>
							<div className="box-grid-portfolio-tags">Styled Components</div>
							<div className="box-grid-portfolio-tags">MUI</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
};
