'use client';

import { useEffect, useRef, useState } from 'react';

import { useIntersection } from '@/hooks/useInteraction';

export default function Typing({
	typingInterval = 100,
	children
}: {
	typingInterval?: number
	children: string
}) {
	const { ref, isIntersected } = useIntersection();
	const [text, setText] = useState('_');

	useEffect(() => {
		if (!isIntersected) return;

		let i = 0;

		const interval = setInterval(() => {
			if (i++ < children.length) {
				const current = children.slice(0, i);

				if (i === children.length) setText(current);
				else setText(current + '_');
			}
		}, typingInterval);

		return () => clearInterval(interval);
	}, [isIntersected]);

	return (
		<>
			<span ref={ref}></span>
			{text}
		</>
	);
}
