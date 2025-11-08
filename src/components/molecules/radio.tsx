import styles from './styles/radio.module.css';

import { ChangeEventHandler } from 'react';

import Button from '../atoms/button';

export default function Radio({
	value,
	name,
	children,
	className,
	onChange,
	defaultChecked
}: {
	value: string
	name: string
	children: React.ReactNode
	className?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
	defaultChecked?: boolean
}) {
	return (
		<>
			<input id={value} className={`${styles.radio} ${className}`} type='radio' name={name} value={value} onChange={onChange} defaultChecked={defaultChecked} />
			<label htmlFor={value}>
				<Button className={styles.button}>{children}</Button>
			</label>
		</>
	);
}
