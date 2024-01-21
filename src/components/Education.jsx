import React from "react";

const educations = [
	{
		name: "Universitas Pamulang",
		major: "Informatics Engineering",
		year: "2021 - Present",
	},
	{
		name: "SMK Bina Putra Mandiri",
		major: "Software Engineering",
		year: "2017 - 2020",
	},
];
function Education({ observerRefs }) {
	return (
		<section
			id="education"
			className="pt-16 lg:pt-24"
			ref={(el) => (observerRefs.current[1] = el)}>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-secondary/10 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					Education
				</h2>
			</div>
			<div>
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-5 lg:flex hidden">
					Education
				</h2>
				<div className="mx-4">
					<ol className="relative border-l border-gray-200 dark:border-gray-700">
						{educations.map((education, key) => {
							return (
								<li
									className="ml-6 mb-10 hover:bg-secondary/30 p-5 rounded-md transition duration-150 ease-in-out hover:scale-105"
									key={key}>
									<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-500 rounded-full ring-8 dark:bg-green-100 ring-light-bg-primary dark:ring-dark-bg-primary">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-3 h-3">
											<path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"></path>
											<path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"></path>
											<path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
										</svg>
									</span>
									<h1 className="flex items-center mb-1 text-lg font-semibold text-slate-300 dark:text-dark-fg-primary">
										{education.name}
									</h1>
									<p className="block mb-3 italic font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
										{education.major}
									</p>
									<time className="block mb-3 text-sm font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
										{education.year}
									</time>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</section>
	);
}

export default Education;
