import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Intro = ({ scrollToCard }: any) => {
	return (
		<>
			<div
				className="overflow-visible
				w-5/6 md:w-4/6
				mt-24
	 			text-4xl md:text-6xl lg:text-8xl landscape-1024:text-5xl landscape-1280:text-5xl"
			>
				<p className="fade-in-text w-10/12 mx-auto">Hei!</p>
				<br></br>
				<p className="fade-in-text delay-1 w-10/12 mx-auto">
					I'm Selvi, a Web Developer based in Helsinki, Finland.
				</p>
			</div>
			<div className="fade-in-text delay-1" onClick={scrollToCard}>
				<div className="animate-bounce text-customPink1 self-end">
					<AiOutlineArrowDown size={100} />
				</div>
			</div>
		</>
	);
};
