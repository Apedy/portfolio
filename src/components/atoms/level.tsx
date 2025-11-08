import styles from './styles/level.module.css';

export default function Level({
	height,
	width,
	mainColor,
	subColor,
	level,
	children
}: {
	height: string
	width: string
	mainColor: string
	subColor: string
	level: number
	children?: React.ReactNode
}) {
	return (
		<div className={styles.level}>
			<svg viewBox='0 0 100 100' height={height} width={width} fill='none'>
				<circle cx='50' cy='50' r='45' stroke={subColor} strokeWidth='10' />
				<circle cx='50' cy='50' r='45' stroke={mainColor} strokeWidth='10' strokeDasharray='282.6 282.6' strokeDashoffset={`${282.6 * (1 - level)}`} className={styles.circle} />
			</svg>

			<div className={styles.component}>
				{children}
			</div>
		</div>
	);
}
