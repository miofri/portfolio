import React from 'react';

export const Footer = () => {
	return (
		<div className="footer">
			<section className="w-56 text-center xl:text-left">
				<h1 className="text-purple-200 text-3xl xl:text-5xl  mb-2 ">
					Let's chat!
				</h1>
				<h2 className="text-purple-300 text-xs xl:text-base">
					Contact me on the following
				</h2>
			</section>
			<section className="footer-button-array">
				<a href="https://linkedin.com/in/selvikesuma">
					<span className="text-sm material-symbols-outlined">person</span>
					LinkedIn
				</a>
				<a href="https://github.com/miofri">
					<span className="text-sm material-symbols-outlined">code</span>
					Github
				</a>
				<a href="mailto:kesuma.slv@gmail.com">
					<span className="text-sm material-symbols-outlined">mail</span>
					Email
				</a>
			</section>
		</div>
	);
};
