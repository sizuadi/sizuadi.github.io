import React from "react";

function Project({ observerRefs }) {
	return (
		<section
			id="project"
			className="pt-16 lg:pt-24"
			ref={(el) => (observerRefs.current[3] = el)}>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-secondary/10 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					Projects
				</h2>
			</div>
			<div>
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-5 lg:flex hidden">
					Projects
				</h2>
				<div className="flex flex-row">
					<div className="bg-secondary/30 w-full mx-5 lg:mx-0 p-3 flex rounded-md">
						<div className="w-full h-48 flex">
							<h2 className="m-auto text-xl text-slate-100">Coming Soon</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;
