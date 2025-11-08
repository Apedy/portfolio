import styles from './page.module.css';

import Button from '@/components/atoms/button';
import Logo from '@/components/atoms/logo';
import Typing from '@/components/atoms/typing';
import {
	ArrowDown
} from 'lucide-react';

export default function Home() {
	return (
		<section id='home' className={styles.page}>

			<Logo size='16rem' />

			<div className={styles.info}>
				<p>Frontend Developer</p>

				<h1>
					<Typing>Apedy Tech</Typing>
				</h1>

				<div className={styles.about}>
					<p>フルスタックエンジニアを目指し、日々研鑽を積んでいます。</p>
				</div>
			</div>

			<Button className={styles.scroll} href='#skills'><ArrowDown /></Button>
		</section>
	);
}
