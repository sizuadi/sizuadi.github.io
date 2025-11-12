import React, { useRef } from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Project from "../components/Project";

const menus = [
	{
		id: "about",
		text: "About",
	},
	{
		id: "education",
		text: "Education",
	},
	{
		id: "experience",
		text: "Experience",
	},
	{
		id: "project",
		text: "Projects",
	},
];

function Home() {
	const observerRefs = useRef([]);

	return (
		<div className="bg-primary">
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<Nav observerRefs={observerRefs} menus={menus} />
					<main id="content" className="lg:w-1/2">
						<About observerRefs={observerRefs} />
						<Education observerRefs={observerRefs} />
						<Experience observerRefs={observerRefs} />
						<Project observerRefs={observerRefs} />
						<Footer />
					</main>
				</div>
			</div>
		</div>
	);
}

export default Home;
