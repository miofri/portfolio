import React from 'react';

export const AboutMe = React.forwardRef((props, ref: any) => {
	return (
		<section ref={ref} className="about-me">
			<aside className="about-me-picture">
				<div className="bg-profile bg-contain bg-no-repeat w-full h-full"></div>
			</aside>

			<article className="about-me-article">
				<h5>ABOUT ME</h5>
				<h4>Hei, I'm Selvi!</h4>
				<br />
				<p>
					I'm a Junior Web Developer based in Helsinki, Finland. I love learning
					new technologies, writing code that's easy to read, and exploring ways
					to create a pleasant and engaging user experience. I'm always on the
					lookout for new projects!
				</p>
				<br />
				<p>
					I attended Hive Helsinki, a 42 school, where I was introduced to Web
					Development. I decided to specialise in it, and explored Helsinki
					University's Full Stack Open, which had really ignited my love for Web
					Development! Shortly after, I enrolled to Integrify's Full Stack
					Development course, where I learned ASP.NET Core, the basic of DevOps
					and Azure.
				</p>
				<br />
				<p>
					Outside of coding, I spend my free-time running, gaming, and trying
					out new recipes I found on the net. &#127858;
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
					<h5>TOOLKIT</h5>
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
						<div>
							<div className="bg-tailwindcss"></div>
							<p>Tailwind</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
});
