import s from "../../styles/components/project.module.scss";
import LeftArrowIcon from "../../public/arrow_left.svg";
import RightArrowIcon from "../../public/arrow_right.svg";
import { useEffect } from "react";
import pagesData from "../../pages-data.json";
import Link from "next/link";

export default function ProjectPage(props) {
	useEffect(() => {
		console.log("loaded");
	}, [props]);

	function getProjectsPaths() {
		let p = [];

		pagesData.forEach((page) => {
			if (page.isProject) p.push(page.path);
		});

		return p;
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
			<header className={s.project__header}>
				<Link href={paths[prevIndex]}>
					<div
						data-disabled={(!prevIndexIsValid).toString()}
						onClick={(e) => {}}
						className={s.nav_arrow__left}
					>
						<LeftArrowIcon></LeftArrowIcon>
					</div>
				</Link>
				<h1 className={s.project__name}>{props.project.name}</h1>
				<Link href={paths[nextIndex]}>
					<div
						data-disabled={(!nextIndexIsValid).toString()}
						className={s.nav_arrow__right}
					>
						<RightArrowIcon></RightArrowIcon>
					</div>
				</Link>
			</header>
			<main className={s.project__container}>
				<div className={s.project__overlay}>Under construction 👷‍♂️</div>
				<iframe src=""></iframe>
			</main>
		</section>
	);
}
