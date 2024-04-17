'use client';
import { useEffect, useState } from 'react';

const ScrollableDiv = () => {
	const [backgroundColor, setBackgroundColor] = useState('transparent');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const maxScroll = document.body.clientHeight - window.innerHeight;
			const scrollPercentage = (scrollPosition / maxScroll) * 100;

			// Calculate the color based on the scroll position
			const color = `rgb(${scrollPercentage * 2.55}, ${
				scrollPercentage * 2.55
			}, ${scrollPercentage * 2.55})`;
			setBackgroundColor(color);
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			style={{
				height: '800vh',
				width: '1rem',
				backgroundColor: backgroundColor,
			}}>
			{/* Your content goes here */}
		</div>
	);
};

export default ScrollableDiv;
