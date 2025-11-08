import Button from '../atoms/button';
import styles from './styles/header.module.css';

import Logo from '@/components/atoms/logo';

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo size='2rem' />

			<nav className={styles.navigation}>
				<Button href='#home'>Home</Button>
				<Button href='#skills'>Skills</Button>
				<Button href='#projects'>Projects</Button>
				<Button href='#career'>Career</Button>
			</nav>
		</header>
	);
}
