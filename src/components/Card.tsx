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
				mb-4 2xl:mb-0
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
								<a href="http://houzi.vercel.app">Go</a>
							</button>
							<button>
								<a href="http://https://github.com/miofri/Fullstack-ASP-.NET-Core-React-Integrify-Project">
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

				<div className="box-grid-portfolio fade-in-text">
					<h4 className=" text-5xl text-darkPurple font-mulish font-black">
						Coming soon.
					</h4>
				</div>
			</div>
		</section>
	);
};
