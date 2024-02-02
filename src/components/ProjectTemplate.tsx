import React from 'react';

interface ProjectTemplateInputModel {
	title: string;
	description: string;
	links: {
		go: string;
		sourceCode: string;
	};
	tags: string[];
}

export const ProjectTemplate: React.FC<ProjectTemplateInputModel> = ({
	title,
	description,
	links,
	tags,
}) => {
	return (
		<div className="box-grid-portfolio">
			<div
				className="w-10/12 h-fit
			py-4 lg:py-10
			px-4 lg:px-8"
			>
				<h4>{title}</h4>
				<p>{description}</p>
				<div className="flex gap-3 lg:mt-5">
					<button>
						<a href={links.go}>Go</a>
					</button>
					<button>
						<a href={links.sourceCode}>Source code</a>
					</button>
				</div>
				<div className="flex flex-row flex-wrap gap-2 text-xs mt-4 font-mulish">
					{tags.map((tag) => (
						<div className="box-grid-portfolio-tags">{tag}</div>
					))}
				</div>
			</div>
		</div>
	);
};
