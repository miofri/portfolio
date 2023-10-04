import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Intro = ({ scrollToCard }: any) => {
	return (
		<section className="intro">
			<div className="intro-text">
				<h5>Selvi Kesuma</h5>
				<p className="delay-1">WEB DEVELOPER</p>
			</div>
			<div className="intro-arrow" onClick={scrollToCard}>
				<div className="animate-bounce">
					<AiOutlineArrowDown size={100} />
				</div>
			</div>
		</section>
	);
};
