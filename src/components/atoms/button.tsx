import styles from './styles/button.module.css';

import { MouseEventHandler } from 'react';

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export default function Button({
	className,
	direction,
	href,
	onClick,
	children
}: {
	className?: string
	direction?: Direction
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement>
	children: React.ReactNode
}) {
	return (
		<a className={`${styles.button} ${className}`} href={href} onClick={onClick} style={{ flexDirection: direction }}>{children}</a>
	);
}
