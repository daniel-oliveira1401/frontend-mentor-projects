import styles from "../../styles/components/projects-page.module.scss";
import Link from "next/link";
import Head from "next/head";

export default function ProjectsPage(props) {
	// console.log("data:", props);

	let projectsCards;

	projectsCards = props.projectsData.map((projectData) => {
		return (
			<Link key={projectData.path} href={projectData.path}>
				<div tabIndex={0} className={styles.projectCard}>
					<div className={styles.projectCard__img}>
						<img
							// src={`./projects/previews/${projectData.path}.jpeg`}
							src={`/projects/previews/preview-${projectData.path}.jpg`}
							alt="Project preview"
						/>
					</div>
					<h2 className={styles.projectCard__title}>{projectData.name}</h2>
					<p className={styles.projectCard__description}>
						{projectData.description}
					</p>
				</div>
			</Link>
		);
	});

	return (
		<section data-projects className={styles.projects}>
			<Head>
				<meta
					name="description"
					content="Come check out my Frontend Mentor projects ✨"
					key={"desc"}
				/>
				<meta property="og:title" content={"Frontend Mentor Projects"} />

				<meta property="og:image" content="/og_img_home.jpg" />
				<meta
					property="og:description"
					content="Come check out my Frontend Mentor projects ✨"
				/>
				<title>Projects</title>
			</Head>
			{projectsCards}
		</section>
	);
}
