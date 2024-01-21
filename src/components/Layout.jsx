import React, { useRef } from "react";
import Nav from "./Nav";
import About from "./About";
import Education from "./Education";
import Footer from "./Footer";
import Experience from "./Experience";
import Project from "./Project";
function Layout() {
	const observerRefs = useRef([]);

	return (
		<div className="bg-primary">
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<Nav observerRefs={observerRefs} />
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

export default Layout;
