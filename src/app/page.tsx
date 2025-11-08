'use client';

import styles from './page.module.css';

import Home from './home/page';
import Skills from './skills/page';
import Projects from './projects/page';

export default function Page() {
	return (
		<main className={styles.page}>
			<Home />

			<Skills />

			<Projects />
		</main>
	);
}
