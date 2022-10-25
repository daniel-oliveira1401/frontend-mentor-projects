import styles from "../../styles/components/home-page.module.scss";
import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
	return (
		<div data-home className={styles.home}>
			<Head>
				<meta property="og:image" content="/og_img_home.jpg" />
				<meta
					property="og:description"
					content="Come check out my Frontend Mentor projects ✨"
				/>
				<title>Home</title>
			</Head>
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
