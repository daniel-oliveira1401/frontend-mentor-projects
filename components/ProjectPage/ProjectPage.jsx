import s from "../../styles/components/project.module.scss";
import LeftArrowIcon from "../../public/arrow_left.svg";
import RightArrowIcon from "../../public/arrow_right.svg";
import { useEffect } from "react";
import pagesData from "../../pages-data.json";
import Link from "next/link";
import Head from "next/head";

export default function ProjectPage(props) {
	function getProjectsPaths() {
		let p = [];

		pagesData.forEach((page) => {
			if (page.isProject) p.push(page.path);
		});

		return p;
	}

	function showOverlay() {
		let overlay = document.querySelector("[data-project-overlay]");
		overlay.style.opacity = "1";
	}

	function hideOverlay() {
		let overlay = document.querySelector("[data-project-overlay]");
		overlay.style.opacity = "0";
	}

	let paths = getProjectsPaths();

	let currentIndex = paths.indexOf(props.project.path);

	let nextIndex = currentIndex + 1;
	let nextIndexIsValid = nextIndex <= paths.length - 1;
	nextIndex = nextIndexIsValid ? nextIndex : paths.length - 1;

	let prevIndex = currentIndex - 1;
	let prevIndexIsValid = prevIndex >= 0;
	prevIndex = prevIndexIsValid ? prevIndex : 0;

	return (
		// <div>this is the project: {props.project.name} (under construction 👷‍♂️)</div>
		<section className={s.project}>
			<Head>
				<meta
					name="description"
					content={props.project.description}
					key={"desc"}
				/>
				<meta property="og:title" content={props.project.name} />
				<meta property="og:description" content={props.project.description} />
				<meta
					property="og:image"
					content={`/projects/previews/preview-${props.project.path}.jpg`}
				/>
				<title>{props.project.name}</title>
			</Head>
			<header className={s.project__header}>
				<Link href={paths[prevIndex]}>
					<div
						data-disabled={(!prevIndexIsValid).toString()}
						onClick={(e) => {
							showOverlay();
						}}
						className={s.nav_arrow__left}
					>
						<LeftArrowIcon></LeftArrowIcon>
					</div>
				</Link>
				<h1 className={s.project__name}>
					{props.project.name}
					<span tabIndex={0} className="material-symbols-outlined">
						help
					</span>
					<div className={s.project__tooltip}>{props.project.description}</div>
				</h1>
				<Link href={paths[nextIndex]}>
					<div
						onClick={() => {
							showOverlay();
						}}
						data-disabled={(!nextIndexIsValid).toString()}
						className={s.nav_arrow__right}
					>
						<RightArrowIcon></RightArrowIcon>
					</div>
				</Link>
			</header>
			<main className={s.project__container}>
				<div data-project-overlay className={s.project__overlay}>
					<div className={s.spinner}></div>
				</div>
				<iframe
					onLoad={() => {
						hideOverlay();
					}}
					src={`/projects/${props.project.path}/index.html`}
				></iframe>
			</main>
		</section>
	);
}
