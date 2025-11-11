import styles from './styles/header.module.css';

import Button from '@/components/atoms/button';
import Logo from '@/components/atoms/logo';

import {
	Code,
	Folder,
	Home
} from 'lucide-react';

export default function Header() {
	return (
		<div className={styles.header}>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Button direction='column' href='#home'>
							<Home />
							<p>Home</p>
						</Button>
					</li>

					<li>
						<Button direction='column'href='#skills'>
							<Code />
							<p>Skills</p>
						</Button>
					</li>

					<li>
						<Button direction='column' href='#projects'>
							<Folder />
							<p>Projects</p>
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
