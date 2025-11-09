import styles from './styles/sidebar.module.css';

import Button from '@/components/atoms/button';
import Logo from '@/components/atoms/logo';

import {
	Code,
	Folder,
	Github,
	Home,
	Mail,
	UserPen
} from 'lucide-react';

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Logo size='2rem' />

			<nav className={styles.navigation}>
				<ul>
					<li className={styles.item}>
						<Button direction='column' href='#home'>
							<div>
								<Home />
								<p>Home</p>
							</div>
						</Button>
					</li>

					<li className={styles.item}>
						<Button direction='column'href='#skills'>
							<div>
								<Code />
								<p>Skills</p>
							</div>
						</Button>
					</li>

					<li className={styles.item}>
						<Button direction='column' href='#projects'>
							<div>
								<Folder />
								<p>Projects</p>
							</div>
						</Button>
					</li>

					{/* <li className={styles.item}>
						<Button direction='column' href='#career'>
							<UserPen />
							<p>Career</p>
						</Button>
					</li> */}
				</ul>
			</nav>

			<div>
				<Button direction='column' href='mailto:apedy.tech@gmail.com'>
					<Mail />
					<p>Contact</p>
				</Button>

				<Button direction='column' href='https://github.com/Apedy/portfolio'>
					<Github />
					<p>Github</p>
				</Button>
			</div>
		</div>
	);
}
