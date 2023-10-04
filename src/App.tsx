import './App.css';
import { AboutMe } from './components/AboutMe';
import { Card } from './components/Card';
import { Intro } from './components/Intro';
import { useRef } from 'react';

export const App = () => {
	const cardRef = useRef<null | HTMLDivElement>(null);
	const handleScrollToCard = () => {
		if (cardRef.current) {
			cardRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<>
			<section
				className="flex flex-col
				w-full
				gap-32
				font-ubuntu font-normal text-customPink1 bg-animated"
			>
				<Intro scrollToCard={handleScrollToCard} />
			</section>
			<section>
				<AboutMe ref={cardRef} />
			</section>
			<section>
				<Card />
			</section>
			<section className="h-screen bg-darkPurple"></section>
		</>
	);
};

export default App;
