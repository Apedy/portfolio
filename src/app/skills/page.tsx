'use client';

import styles from './page.module.css';

import { ChangeEvent, useState } from 'react';

import Skill, { skill } from '@/components/organisms/skill';
import Radio from '@/components/molecules/radio';
import Title from '@/components/molecules/title';

const frontend: skill[] = [
	{ name: 'Next.js', progress: 0.6 },
	{ name: 'Vite', progress: 0.2 },
	{ name: 'React', progress: 0.6 },
	{ name: 'TypeScript', progress: 0.8 },
	{ name: 'CSS Modules', progress: 0.8 },
	{ name: 'Tailwind CSS', progress: 0.4 }
];

const backend: skill[] = [
	{ name: 'Actix Web', progress: 0.2 },
	{ name: 'async-graphql', progress: 0.01 },
	{ name: 'MySQL', progress: 0.01 },
	{ name: 'SQLx', progress: 0.2 },
	{ name: 'Rust', progress: 0.2 }
];

const tools: skill[] = [
	{ name: 'Git / Github', progress: 0.6 },
	{ name: 'Docker', progress: 0.01 }
];

enum SkillCategory {
	all = 'all',
	frontend = 'frontend',
	backend = 'backend',
	tools = 'tools'
}

export default function Skills() {
	const [category, setCategory] = useState('all');

	function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
		setCategory(event.target.value);
	}

	return (
		<section id='skills' className={styles.page}>
			<Title>Skills</Title>

			<div className={styles.category}>
				<Radio value={SkillCategory.all} name='skill' onChange={event => handleRadioChange(event)} defaultChecked={true}>All</Radio>

				<Radio value={SkillCategory.frontend} name='skill' onChange={event => handleRadioChange(event)}>Frontend</Radio>

				<Radio value={SkillCategory.backend} name='skill' onChange={event => handleRadioChange(event)}>Backend</Radio>

				<Radio value={SkillCategory.tools} name='skill' onChange={event => handleRadioChange(event)}>Tools</Radio>
			</div>

			<div className={styles.skills}>
				{(() => {
					switch (category) {
						case SkillCategory.frontend:
							return frontend;
						case SkillCategory.backend:
							return backend;
						case SkillCategory.tools:
							return tools;
						default:
							return [...frontend, ...backend, ...tools];
					}
				})().map((skill, key) => <Skill skill={skill} key={key} />)}
			</div>

		</section>
	);
}
