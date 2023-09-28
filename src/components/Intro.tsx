import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Intro = ({ scrollToCard }: any) => {
	return (
		<div className="w-3/4 h-screen my-auto mx-auto rounded-lg flex flex-col items-end align text-3xl md:text-8xl font-philospoher text-customPink1">
			<div className="my-auto overflow-hidden ">
				<p className="fade-in-text w-11/12 mx-auto">Hei!</p>
				<br></br>
				<p className="fade-in-text delay-1 w-11/12 mx-auto">
					I'm Selvi, a Web Developer based in Helsinki, Finland.
				</p>
			</div>
			<div className=" fade-in-text delay-1" onClick={scrollToCard}>
				<div className="animate-bounce">
					<AiOutlineArrowDown size={100} />
				</div>
			</div>
		</div>
	);
};
