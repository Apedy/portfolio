import styles from './styles/title.module.css';

import Typing from '../atoms/typing';

export default function Title({
	children,
	className
}: {
	children: string
	className?: string
}) {
	return (
		<h1 className={`${styles.title} ${className}`}><Typing>{children}</Typing></h1>
	);
}
