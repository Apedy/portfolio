import { useEffect, useRef, useState } from 'react';

export function useIntersection() {
	const ref = useRef(null);
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [isIntersected, setIsIntersected] = useState(false);

	useEffect(() => {
		const target = ref.current;
		if (!target) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setIsIntersected(true);
			setIsIntersecting(entry.isIntersecting);
		});

		observer.observe(target);

		return () => {
			observer.unobserve(target);
			observer.disconnect();
		};
	}, []);

	return { ref, isIntersecting, isIntersected } as const;
};
