import './App.css';
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
			<div className="h-screen flex gap-3 bg-animated">
				<Intro scrollToCard={handleScrollToCard} />
			</div>
			<div className="h-auto min-h-screen bg-darkPurple">
				<Card ref={cardRef} />
			</div>
			<div className="h-screen bg-darkPurple"></div>
		</>
	);
};

export default App;
