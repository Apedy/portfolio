import styles from './styles/project.module.css';

export default function Project({
	year,
	name,
	description,
	technologies,
	img
}: {
	year: number
	name: string
	description: string
	technologies: string[]
	img: string
}) {
	return (
		<div className={styles.project}>
			<img className={styles.image} src={img}></img>

			<div className={styles.info}>
				<p className={styles.year}>{year}</p>
				<p className={styles.name}>{name}</p>

				<p className={styles.description}>{description}</p>

				<div className={styles.technologies}>
					{technologies.map((technology, key) => <p className={styles.technology} key={key}>{technology}</p>)}
				</div>
			</div>
		</div>
	);
}
