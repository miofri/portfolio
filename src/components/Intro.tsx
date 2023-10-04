import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Intro = ({ scrollToCard }: any) => {
	return (
		<section className="intro">
			<div className="intro-text">
				<p className="!text-s !font-normal">Hi! My name is...</p>
				<h5>Selvi Kesuma</h5>
				<p className="delay-1 border-t-4 w-fit pt-6">WEB DEVELOPER</p>
			</div>
			<div className="intro-arrow" onClick={scrollToCard}>
				<div className="animate-bounce">
					<AiOutlineArrowDown size={100} />
				</div>
			</div>
		</section>
	);
};
