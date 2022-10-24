import styles from "../../styles/components/layout.module.scss";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

let navItems = ["home", "projects", "info"];

export default function Layout(props) {
	let router = useRouter();
	let [currentActive, setCurrentActive] = useState(getCurrentActive());
	let [navBgIndex, setNavBgIndex] = useState(getNavBgIndex());

	function showTransition() {
		let layout = document.querySelector("[data-layout]");
		layout.classList.add("transition");
	}

	function handleNavClick(index) {
		setCurrentActive(navItems[index]);
		setNavBgIndex(index);
		// showTransition();
	}

	function isActiveItem(item) {
		return item == navItems[navBgIndex];
	}

	function getCurrentActive() {
		let path = router.asPath.replace("/", "");
		if (props.isProject) {
			return "projects";
		} else {
			return path;
		}
	}

	function getNavBgIndex() {
		let path = router.asPath.replace("/", "");
		if (props.isProject) {
			return navItems.indexOf("projects");
		} else {
			return navItems.indexOf(path);
		}
	}

	useEffect(() => {
		let path = router.asPath.replace("/", "");

		if (path != currentActive) {
			if (!props.isProject) {
				setCurrentActive(path);
				setNavBgIndex(navItems.indexOf(path));
			} else {
				setCurrentActive("projects");
				setNavBgIndex(navItems.indexOf("projects"));
			}
		}
	}, [props]);

	return (
		<div
			data-layout
			data-transition={"true"}
			data-current-page={currentActive}
			className={styles.layout}
		>
			<header className={styles.layout__header}>
				<nav className={styles.layout__navbar}>
					<div
						style={{ "--index": `${navBgIndex}` }}
						className={styles.nav__bg}
					></div>
					<Link href={"/home"}>
						<li
							// style={{ "--index": "1" }}
							data-is-active={`${isActiveItem("home")}`}
							onClick={() => {
								handleNavClick(0);
							}}
							className={`${styles.nav__item} ${styles.active}`}
						>
							Home
						</li>
					</Link>
					<Link href={"/projects"}>
						<li
							// style={{ "--index": "2" }}
							data-is-active={`${isActiveItem("projects")}`}
							onClick={() => {
								handleNavClick(1);
							}}
							className={styles.nav__item}
						>
							Projects
						</li>
					</Link>
					<Link href={"/info"}>
						<li
							// style={{ "--index": "3" }}
							data-is-active={`${isActiveItem("info")}`}
							onClick={() => {
								handleNavClick(2);
							}}
							className={styles.nav__item}
						>
							Info
						</li>
					</Link>
				</nav>
			</header>
			<main className={styles.layout__content}>{props.children}</main>
			<div
				data-index="0"
				className={`${styles.bg_circle} ${styles.circle_1}`}
			></div>
			<div
				data-index="1"
				className={`${styles.bg_circle} ${styles.circle_2}`}
			></div>
			<div data-spinner className={styles.spinner_overlay}>
				<div className={styles.spinner}></div>
			</div>
		</div>
	);
}
