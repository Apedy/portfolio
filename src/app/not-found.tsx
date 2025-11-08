import styles from './not-found.module.css';

export default function NotFound() {
	return (
		<div className={styles['not-found']}>
			<p>404 | This page could not be found.</p>
		</div>
	);
}
