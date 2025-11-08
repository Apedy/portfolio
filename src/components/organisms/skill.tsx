import styles from './styles/skill.module.css';

import Progress from '@/components/atoms/progress';

export interface skill {
	name: string
	progress: number
}

export default function Skill({
	skill
}: {
	skill: skill
}) {
	return (
		<div className={styles.skill}>
			<div className={styles.info}>
				<p>{skill.name}</p>

				<p className={styles.progress}>{`${skill.progress * 100}%`}</p>
			</div>

			<Progress height='.6rem' width='16rem' mainColor='#fff' subColor='#fff2' value={skill.progress} max={1} />
		</div>
	);
}
