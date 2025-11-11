import React from "react";

function About({ observerRefs }) {
	return (
		<section
			id="about"
			className="pt-16"
			ref={(el) => (observerRefs.current[0] = el)}>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-secondary/10 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					About
				</h2>
			</div>
			<div>
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-5 lg:flex hidden">
					About
				</h2>
				<div className="text-slate-300 leading-7 mb-5">
					Hello, visitor! My name is Adi Siswanto. A passionate full-stack
					developer with a commitment to crafting solution for web applications.
					My journey in the world of technology began with a deep curiosity for
					both front-end and back-end development, and it has been an
					exhilarating ride ever since.
				</div>
				<div className="text-slate-300 leading-7">
					Lately, my focus is working on projects at the company I work for and
					in my free time I usually learn how to make apps with best practice.
					Away from the computer, i enjoy hangout with my friend and reading
					book sometimes.
				</div>
			</div>
		</section>
	);
}

export default About;
