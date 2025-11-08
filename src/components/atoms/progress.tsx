import { useIntersection } from '@/hooks/useInteraction';

export default function Progress({
	height,
	width,
	mainColor,
	subColor,
	value,
	max
}: {
	height: string
	width: string
	mainColor: string
	subColor: string
	value: number
	max: number
}) {
	const { ref, isIntersected } = useIntersection();
	let progress = 0;

	if (isIntersected) progress = value;

	return (
		<div ref={ref} style={{ backgroundColor: subColor, borderRadius: height, height, width }}>
			<div style={{ backgroundColor: mainColor, borderRadius: height, height, width: `${progress / max * 100}% `, transition: 'width 1s ease-in-out' }}>
			</div>
		</div>
	);
}
