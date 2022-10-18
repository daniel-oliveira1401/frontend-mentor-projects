import styles from "../../styles/components/projects-page.module.scss";
import Link from "next/link";

export default function ProjectsPage(props) {
	// console.log("data:", props);

	let projectsCards;

	projectsCards = props.projectsData.map((projectData) => {
		return (
			<Link key={projectData.path} href={projectData.path}>
				<div
					onClick={() => {
						document.querySelector("html").scrollTo(0, 0);
						setTimeout(() => {
							document
								.querySelector("[data-layout]")
								.classList.add("transition");
						}, 100);
					}}
					className={styles.projectCard}
				>
					<div className={styles.projectCard__img}>
						<img
							// src={`./projects/previews/${projectData.path}.jpeg`}
							src={`/projects/previews/test-preview.jpg`}
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

	return <section className={styles.projects}>{projectsCards}</section>;
}
