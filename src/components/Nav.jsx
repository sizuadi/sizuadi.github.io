import React, { useEffect, useRef, useState } from "react";
import { NavSocialMedia } from "./NavSocialMedia";
import { TypeAnimation } from "react-type-animation";
// import { NavItem } from "./NavItem";
// import { TypeAnimation } from "react-type-animation";
const items = [
	{
		text: "About",
	},
	{
		text: "Education",
	},
	{
		text: "Experience",
	},
	{
		text: "Projects",
	},
];
const Nav = ({ observerRefs }) => {
	const observers = useRef([]);

	const scrollDown = (key) => {
		window.scrollTo({
			top: observerRefs.current[key].offsetTop,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		if (observerRefs.current?.length && observers.current) {
			Array.from(Array(10).keys()).forEach((_u, key) => {
				observers.current[key] = new IntersectionObserver(
					(e) => {
						if (observerRefs.current[key]) {
							observers.current[key].observe(observerRefs.current[key]);
						}
					},
					{
						root: null,
						threshold: 0,
					}
				);
				if (observerRefs.current[key]) {
					observers.current[key].observe(observerRefs.current[key]);
				}
			});
		}
		return () =>
			observers.current?.forEach((observer) => observer?.current?.disconnect());
	}, [observerRefs, observers]);
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<div>
				<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
					<a href="/">Adi Siswanto</a>
				</h1>
				<h2 className="mt-3 text-lg font-light tracking-tight text-slate-200 sm:text-xl">
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							"I'm a Full-stack Developer",
							1000, // wait 1s before replacing "Mice" with "Hamsters"
							"I'm an Informatics Engineering Student",
							1000,
							"I'm a FOSS Enthusiast",
							1000,
						]}
						wrapper="span"
						speed={50}
						style={{ display: "inline-block" }}
						repeat={Infinity}
					/>
				</h2>
				<p className="mt-4 max-w-xs leading-normal text-slate-200">
					Fast learner and self-taught.
				</p>
				<nav className="nav hidden lg:block" aria-label="In-page jump links">
					<ul className="mt-16 w-max">
						{items.map((item, key) => {
							return (
								<li
									className="group flex items-center py-3 active cursor-pointer"
									key={key}
									onClick={() => scrollDown(key)}>
									<span
										className={`nav-indicator mr-4 h-px group-hover:w-16 group-hover:bg-slate-200 transition-all motion-reduce:transition-none bg-slate-600 w-8`}></span>
									<span
										className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 text-slate-500`}>
										{item.text}
									</span>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
			<NavSocialMedia />
		</header>
	);
};

export default Nav;
