import pagesData from "../pages-data.json";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useEffect } from "react";

const Layout = dynamic(() => import("../components/Layout/Layout"));
const HomePage = dynamic(() => import("../components/HomePage/HomePage"));
const InfoPage = dynamic(() => import("../components/InfoPage/InfoPage"));
const ProjectsPage = dynamic(() =>
	import("../components/ProjectsPage/ProjectsPage")
);
const ProjectPage = dynamic(() =>
	import("../components/ProjectPage/ProjectPage")
);

function getProjectsData() {
	return pagesData.filter((page) => {
		return page.isProject == true;
	});
}

export default function Page(props) {
	let pageComponent;

	switch (props.page.path) {
		case "home":
			pageComponent = <HomePage></HomePage>;
			break;

		case "info":
			pageComponent = <InfoPage></InfoPage>;
			break;

		case "projects":
			pageComponent = (
				<ProjectsPage projectsData={getProjectsData()}></ProjectsPage>
			);
			break;

		//default is ProjectPage
		default:
			pageComponent = <ProjectPage project={props.page}></ProjectPage>;
			break;
	}

	function hideTransition() {
		let layout = document.querySelector("[data-layout]");
		layout.classList.remove("transition");
	}

	useEffect(() => {
		// hideTransition();
	});

	useEffect(() => {
		// console.log("changed");
	}, [props]);

	return <Layout isProject={props.page.isProject}>{pageComponent}</Layout>;
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
	// console.log(params.page);

	let page = pagesData.find((p) => p.path == params.page);

	return {
		props: {
			page
		}
	};
}
