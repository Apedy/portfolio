import styles from './page.module.css';

import Title from '@/components/molecules/title';
import Project from '@/components/organisms/project';

export default function Projects() {
	return (
		<section id='projects' className={styles.page}>

			<Title>Projects</Title>

			<div className={styles.projects}>
				<Project year={2025} name='Portfolio' description='ポートフォリオサイト' technologies={['Next.js', 'CSS Modules', 'TypeScript']} img='images/portfolio.png' />

				<Project year={2025} name='Train Vision(WIP)' description='山手線トレインビジョン' technologies={['Next.js', 'CSS Modules', 'TypeScript']} img='images/trainvision.png' />

				<Project year={2025} name='Authin(WIP)' description='パスワード管理アプリ' technologies={['Vite', 'Actix Web', 'SQLx', 'MySQL', 'Docker', 'Rust', 'TypeScript']} img='images/authin.png' />
			</div>
		</section>
	);
}
