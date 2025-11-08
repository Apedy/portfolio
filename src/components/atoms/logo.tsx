import styles from './styles/logo.module.css';

export default function Logo({
	size,
	className
}: {
	size: string
	className?: string
}) {
	return (
		<div className={`${styles.logo} ${className}`}>
			<img src='apedy.svg' style={{ height: size }}></img>
		</div>
	);
}
