import styles from "../../styles/components/home-page.module.scss";
import Link from "next/link";

export default function HomePage() {
	return (
		<div data-home className={styles.home}>
			<section className={styles.home__hero}>
				<div className={styles.container}>
					<h2>Some of my</h2>
					<img src="frontend-mentor.png" alt="frontend mentor image" />
					<h2>projects</h2>
				</div>
			</section>
			<div className={styles.home__cta}>
				<Link href="/projects">
					<button>Check them out</button>
				</Link>
			</div>
		</div>
	);
}
