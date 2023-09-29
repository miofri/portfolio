import React from 'react';
import catImg from './cat-keyboard.jpeg';
import { useRef } from 'react';

export const Card = React.forwardRef((props, ref: any) => {
	return (
		<div
			ref={ref}
			className="flex flex-col
			gap-10 sm:gap-20 md:gap-20 lg:gap-12 xl:gap-0 2xl:gap-10
			 mb-98 overflow-visible items-center"
		>
			<div className="box-grid-header">
				<h2 className="font-philospoher text-customPink1  mt-10">Projects</h2>
			</div>
			<div
				className="flex flex-col lg:flex-row gap-2 align-middle justify-center items-center
			h-full
			w-full xl:mt-10"
			>
				<div
					className=" lg:h-5/6
				lg:w-11/12 xl:w-10/12
				mb-4 2xl:mb-0
				flex flex-col
				gap-1 items-center justify-items-center"
				>
					<div className="box-grid-portfolio fade-in-text">
						<h4 className="">E-Commerce</h4>

						<p>
							The first project I've done that used ASP.NET Core as well as
							PSQL. A mock online-store that allows users to do basic operations
							such as registering, logging-in, placing an order, etc. More
							details availale in the source code.
						</p>
						<div className="flex gap-3 mt-0 lg:mt-5">
							<button>Go</button>
							<button>Source code</button>
						</div>
						<div className="flex flex-row flex-wrap gap-2 text-xs mt-4 font-mulish">
							<div className="box-grid-portfolio-tags">C# / ASP.Net Core</div>
							<div className="box-grid-portfolio-tags">React</div>
							<div className="box-grid-portfolio-tags">PostgreSQL</div>
							<div className="box-grid-portfolio-tags">Redux-toolkit</div>
							<div className="box-grid-portfolio-tags">Azure</div>
						</div>
					</div>
					<div className="box-grid-portfolio">
						<h4 className=" text-5xl text-darkPurple font-mulish font-black">
							Coming soon.
						</h4>
					</div>
					<div className="box-grid-portfolio">
						<h4 className=" text-5xl text-darkPurple font-philospoher font-black">
							Coming soon.
						</h4>
					</div>
					<div className="box-grid-portfolio">
						<h4 className=" text-5xl text-darkPurple font-philospoher font-black">
							Coming soon.
						</h4>
					</div>
				</div>
				{/* <div className="w-5/6 lg:w-1/4 h-fit lg:h-5/6 mr-2 my-auto border-8 border-solid border-almostMagenta flex flex-col">
					<div className="bg-gray-500 w-10/12 lg:w-10/12 h-96 lg:h-1/2 mx-auto mt-9 bg-display-cat"></div>
					<div className=" w-10/12 h-1/2 mx-auto mt-2">
						<p className="font-philospoher text-almostMagenta text-2xl">
							Nice to meet you!
						</p>
						<p className="font-mulish text-customPink1">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							rhoncus ex eu justo iaculis blandit. Donec in blandit nunc. Fusce
							vel gravida est. Integer at augue ac enim hendrerit pretium sed ut
							quam. Nullam nec mattis ex, et placerat magna. Sed hendrerit
							tortor dolor, non tristique turpis ornare a. Suspendisse potenti.
							Praesent hendrerit turpis vel leo commodo malesuada. Donec a
							tortor odio.
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
});
