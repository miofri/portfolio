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
			<Intro scrollToCard={handleScrollToCard} />
			<AboutMe ref={cardRef} />
			<Card />
		</>
	);
};

export default App;
