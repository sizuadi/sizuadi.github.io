import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavItem } from "./NavItem";
// import { TypeAnimation } from "react-type-animation";
const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="bg-primary top-0 fixed left-0 right-0">
			<nav className="md:max-w-4xl md:mx-auto">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center md:block flex-1">
							<div className="flex-shrink-0 md:hidden">
								<div className="text-quaternary text-lg font-semibold">
									Sizuadi
								</div>
							</div>
							<div className="hidden md:block">
								<div className="flex justify-between items-baseline mx-10 text-md font-semibold">
									<NavItem
										link="/"
										text="Intro"
										textClass="hover:bg-tertiary text-quaternary hover:text-white transition duration-150 ease-out"
									/>
									<NavItem
										link="/experience"
										text="Experiences"
										textClass="hover:bg-tertiary text-quaternary hover:text-white transition duration-150 ease-out"
									/>
									<NavItem
										link="/project"
										text="Projects"
										textClass="hover:bg-tertiary text-quaternary hover:text-white transition duration-150 ease-out"
									/>
									<NavItem
										link="/contact"
										text="Contact Me"
										textClass="hover:bg-tertiary text-quaternary hover:text-white transition duration-150 ease-out"
									/>
								</div>
							</div>
						</div>
						<div className="md:-mr-2 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-quaternary inline-flex items-center justify-center p-2 rounded-md text-gray-400 transition duration-150 ease-out hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-tertirary focus:ring-tertirary"
								aria-controls="mobile-menu"
								aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95">
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<NavItem
									link="/"
									text="Intro"
									textClass="hover:bg-gray-500 text-quaternary hover:text-gray-100 transition duration-150 ease-out"
								/>
								<NavItem
									link="/experience"
									text="Experiences"
									textClass="hover:bg-gray-500 text-quaternary hover:text-gray-100 transition duration-150 ease-out"
								/>
								<NavItem
									link="/project"
									text="Projects"
									textClass="hover:bg-gray-500 text-quaternary hover:text-gray-100 transition duration-150 ease-out"
								/>
								<NavItem
									link="/contact"
									text="Contact Me"
									textClass="hover:bg-gray-500 text-quaternary hover:text-gray-100 transition duration-150 ease-out"
								/>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default Nav;
