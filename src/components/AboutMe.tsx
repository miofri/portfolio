import React from 'react';

export const AboutMe = React.forwardRef((props, ref: any) => {
	return (
		<div ref={ref} className="about-me">
			<aside className="about-me-picture">
				<div className="bg-profile bg-contain bg-no-repeat w-full h-full"></div>
			</aside>

			<article className="about-me-article">
				<h5>ABOUT ME</h5>
				<h4>Hei, I'm Selvi!</h4>
				<br />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
					nec convallis velit. Suspendisse a erat eu metus sodales vehicula.
					Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Sed pharetra metus at odio feugiat vehicula
					placerat ut nulla. Etiam vel lobortis velit. Nullam rutrum arcu in
					ipsum accumsan, quis facilisis enim pellentesque. Fusce eu rutrum
					purus. Sed eget neque metus. Sed finibus tortor sed erat lobortis, sed
					lacinia nunc malesuada. Duis semper vestibulum nunc in rhoncus.
					Phasellus suscipit gravida nisi ac tempor.
				</p>
				<br />
				<div>
					<div className="flex flex-row gap-4 align-middle justify-center pt-2">
						<a href="https://github.com/miofri">
							<div className="w-[25px] h-[25px] bg-github bg-contain bg-center bg-no-repeat"></div>
						</a>
						<a href="https://www.linkedin.com/in/selvikesuma/">
							<div className="w-[25px] h-[25px] bg-linkedin bg-cover"></div>
						</a>
					</div>
				</div>
				<div className="about-me-skills">
					<h5>SKILLS</h5>

					<div className="about-me-skills-containers">
						<div>
							<div className="bg-javascriptLogo"></div>
							<p>JavaScript</p>
						</div>
						<div>
							<div className="bg-typescriptLogo"></div>
							<p>TypeScript</p>
						</div>
						<div>
							<div className="bg-reactLogo bg-contain bg-no-repeat bg-center w-[50px] h-[50px] mb-2"></div>
							<p>React.JS</p>
						</div>
						<div>
							<div className="bg-nodejs"></div>
							<p>Node.JS</p>
						</div>
						<div>
							<div className="bg-postgresLogo"></div>
							<p>PostgreSQL</p>
						</div>
						<div>
							<div className="bg-mongodbLogo"></div>
							<p>MongoDB</p>
						</div>
						<div>
							<div className="bg-aspnetcoreLogo"></div>
							<p>C# / ASP.NET Core</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
});
