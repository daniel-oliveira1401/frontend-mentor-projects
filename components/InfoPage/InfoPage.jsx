import s from "../../styles/components/info-page.module.scss";
import Head from "next/head";

export default function InfoPage() {
	return (
		<div className={s.info} data-info>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
				/>
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
				<title>Info</title>
			</Head>
			<div data-right className={s.paragraph}>
				<a
					rel="noreferrer"
					target={"_blank"}
					href="https://www.linkedin.com/in/daniel-oliveira-807654234/"
					className={s.profile_pic}
				>
					<img src="/daniel-oliveira.jpeg" alt="A picture of me" />
				</a>
				<p>Hello, my name is Daniel and I&apos;m a Frontend Web Developer ✨</p>
			</div>
			<div data-right className={s.paragraph}>
				<p>
					This website was made with the goal of showcasing the{" "}
					<a
						rel="noreferrer"
						target={"_blank"}
						href="https://www.frontendmentor.io/challenges"
					>
						Frontend Mentor
					</a>{" "}
					projects that I have finished so far. All of them are responsive, and
					most of them are interactive too.
				</p>
			</div>
			<div data-left className={s.paragraph}>
				<p>
					These projects were all suggested to me by my teacher{" "}
					<a
						rel="noreferrer"
						target={"_blank"}
						href="https://github.com/Estevao-lang"
					>
						Gabriel Estevão
					</a>{" "}
					(thank you, teacher 😄) and I&apos;m learning a lot while coding them.
				</p>
			</div>
			<div data-left className={s.paragraph}>
				<p>
					I&apos;m using HTML, SASS and JavaScript with jQuery to code them, and
					I&apos;m also using Figma to help me get the website looking exactly
					how the design shows it.
				</p>
			</div>
			<div className={s.paragraph}>
				<p>
					I also have another website very similar to this one that I created to
					showcase some of my{" "}
					<a
						rel="noreferrer"
						target={"_blank"}
						href="https://nextjs-react-showcase.vercel.app/"
					>
						ReactJs Projects
					</a>
					.
				</p>
			</div>
			<div className={s.paragraph}>
				<p>
					If you liked what you have seen so far, please contact me via{" "}
					<a
						rel="noreferrer"
						target={"_blank"}
						href="https://www.linkedin.com/in/daniel-oliveira-807654234/"
					>
						LinkedIn
					</a>
					. Otherwise, if you just want to know more about me, I also have a{" "}
					<a
						rel="noreferrer"
						target={"_blank"}
						href="https://daniel-oliveira1401.github.io/"
					>
						Portfolio
					</a>
					.
				</p>
			</div>
			<div className={s.links}>
				<a
					rel="noreferrer"
					target={"_blank"}
					href="https://github.com/daniel-oliveira1401/frontend-mentor-projects"
					className={s.link}
				>
					<i className="devicon-github-original-wordmark colored"></i>
				</a>
				<a
					target={"_blank"}
					rel="noreferrer"
					href="https://www.linkedin.com/in/daniel-oliveira-807654234/"
					className={s.link}
				>
					<i className="devicon-linkedin-plain colored"></i>
				</a>
			</div>
		</div>
	);
}
