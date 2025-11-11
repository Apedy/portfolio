'use client';

import { useEffect, useState } from 'react';

export function Desktop({
	children
}: {
	children: React.ReactNode
}) {
	const [isLarge, setIsLarge] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsLarge(window.innerWidth >= 1280);
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		isLarge ? <>{children}</> : <></>
	);
}

export function Mobile({
	children
}: {
	children: React.ReactNode
}) {
	const [isSmall, setIsSmall] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsSmall(window.innerWidth < 1280);
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		isSmall ? <>{children}</> : <></>
	);
}
