import styles from "../../styles/components/home-page.module.scss";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className={styles.home}>
			<section className={styles.home__hero}>
				<h2>Some of my</h2>
				<img src="frontend-mentor.png" alt="frontend mentor image" />
				<h2>projects</h2>
			</section>
			<div className={styles.home__cta}>
				<Link href="/projects">
					<button
						onClick={() => {
							document
								.querySelector("[data-layout]")
								.classList.add("transition");
						}}
					>
						Check them out
					</button>
				</Link>
			</div>
		</div>
	);
}
