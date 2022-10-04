import pagesData from "../pages-data.json";
import Link from "next/link";
import { useEffect, useState } from "react";
// import HomePage from "../components/HomePage/HomePage";
// import InfoPage from "../components/InfoPage/InfoPage";
// import ProjectsPage from "../components/ProjectsPage/ProjectsPage";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout/Layout"));
const HomePage = dynamic(() => import("../components/HomePage/HomePage"));
const InfoPage = dynamic(() => import("../components/InfoPage/InfoPage"));
const ProjectsPage = dynamic(() =>
	import("../components/ProjectsPage/ProjectsPage")
);

export default function Page(props) {
	console.log(props);

	let pageComponent;

	switch (props.page.path) {
		case "home":
			pageComponent = <HomePage></HomePage>;
			break;

		case "info":
			pageComponent = <InfoPage></InfoPage>;
			break;

		default:
			pageComponent = <ProjectsPage project={props.page}></ProjectsPage>;
			break;
	}

	useEffect(() => {
		console.log("changed");
		document.querySelector("p.myP").style.backgroundColor = "blue";
	}, [props]);

	let navbar = (
		<nav className="normal">
			{pagesData.map((page) => {
				return (
					<Link key={page.path} href={page.path}>
						<a
							onClick={() => {
								console.log("changing");
								document.querySelector("p.myP").style.backgroundColor = "red";
							}}
						>
							{page.name}
						</a>
					</Link>
				);
			})}
		</nav>
	);

	return (
		<div>
			{navbar}
			<h1>👋 🌎 {props.page.name}</h1>
			{pageComponent}
			<p style={{ backgroundColor: "red" }} className={"myP"}>
				animated
			</p>
		</div>
	);
}

export async function getStaticPaths() {
	let paths = pagesData.map((project) => {
		return {
			params: {
				page: project.path
			}
		};
	});

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	console.log(params.page);

	let page = pagesData.find((p) => p.path == params.page);

	return {
		props: {
			page
		}
	};
}
