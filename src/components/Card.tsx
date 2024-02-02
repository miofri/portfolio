import React from 'react';
import { portfolioItems } from '../data/portfolioItems';
import { ProjectTemplate } from './ProjectTemplate';

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
				w-full lg:w-11/12
				mb-10 2xl:mb-20
				xl:mt-10
				flex flex-row justify-center items-start flex-wrap
				gap-6
				"
			>
				{portfolioItems.map((item) => {
					return (
						<ProjectTemplate
							title={item.title}
							description={item.description}
							links={item.links}
							tags={item.tags}
						/>
					);
				})}
			</div>
		</section>
	);
};
