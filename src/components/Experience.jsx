import React from "react";

const experiences = [
	{
		work_place: "PT. Digerati Atomic Indonesia",
		role: "Software Engineer",
		work_type: "Fulltime",
		description:
			"I work in PT Digerati Atomic Indonesia as Software Engineer. I responsible in creating frontend or backend system for some project in PT Digerati Atomic Indonesia.",
		year: "Jul 2022 - Present",
		skills: [
			"Go",
			"Laravel",
			"PHP",
			"MYSQL",
			"REST API",
			"PostgreSQL",
			"Tailwindcss",
		],
	},
	{
		work_place: "PT. Areta Amany Solusi",
		role: "Fullstack Web Developer",
		work_type: "Fulltime",
		description:
			"I work in PT Areta Amany Solusi as Fullstack Web Developer. I responsible in creating frontend and backend system for some project in PT Areta Amany Solusi.",
		year: "Nov 2020 - Jun 2022",
		skills: ["REST API", "Laravel", "PHP", "MYSQL", "Redis"],
	},
	{
		work_place: "Omindtech.id",
		role: "Backend Developer",
		work_type: "Freelance",
		description:
			"I work in Omindtech as Freelance Backend Engineer. I responsible in creating backend system for some project in Omindtech. I create a backend system for e-learning management system with 3rd party payment method using Midtrans and create a backend system for the housing agent system",
		year: "Nov 2020 - Jan 2021",
		skills: ["REST API", "Laravel", "PHP", "MYSQL", "Redis"],
	},
	{
		work_place: "Pandi.id",
		role: "Web Developer",
		work_type: "Freelance",
		description:
			"Develop website for the rmco.id news website with an interactive and responsive design on all devices, develop website for an art exhibition and sell it to the website visitor and develop website to introduce various kinds of scripts in Indonesia",
		year: "Jan 2020 - Okt 2020",
		skills: [
			"HTML",
			"CSS",
			"Javascript",
			"Jquery",
			"PHP",
			"Laravel",
			"Wordpress",
		],
	},
	{
		work_place: "Unixon Branding",
		role: "Programmer",
		work_type: "Internship",
		description:
			"As an internship at Unixon, I can do customizing CMS platforms, design, and web development. My proficiency in Wordpress, Google Ads, Photoshop, and web design languages such as HTML, CSS, JavaScript, jQuery, and Bootstrap allows me to create impactful digital experiences.",
		year: "Jan 2019 - Apr 2019",
		skills: [
			"HTML",
			"CSS",
			"Javascript",
			"Jquery",
			"PHP",
			"Wordpress",
			"Codeigniter 3",
		],
	},
];
function Experience({ observerRefs }) {
	return (
		<section
			id="experience"
			className="pt-16 lg:pt-24"
			ref={(el) => (observerRefs.current[2] = el)}>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-secondary/10 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					Experience
				</h2>
			</div>
			<div>
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-5 lg:flex hidden">
					Experience
				</h2>
				<div className="mx-4">
					<ol className="relative border-l border-gray-200 dark:border-gray-700">
						{experiences.map((exp, key) => {
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
											<path
												fillRule="evenodd"
												d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
												clipRule="evenodd"></path>
											<path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
										</svg>
									</span>
									<h1 className="flex items-center mb-1 text-lg font-semibold text-slate-300 dark:text-dark-fg-primary">
										{exp.work_place}
									</h1>
									<p className="block mb-3 italic font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
										{exp.role} · {exp.work_type}
									</p>
									<div className="mb-3 text-xs text-slate-300 leading-5">
										{exp.description}
									</div>
									<div className="flex flex-wrap mb-3">
										{exp.skills.map((skill, key) => {
											return (
												<div
													className="flex items-center rounded-full mr-2 mb-2 bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-quaternary"
													key={key}>
													{skill}
												</div>
											);
										})}
									</div>
									<time className="block mb-3 text-sm font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
										{exp.year}
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

export default Experience;
