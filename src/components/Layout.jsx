import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div className="bg-primary">
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
						<div>
							<h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
								<a href="/">Adi Siswanto</a>
							</h1>
							<h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
								Full-stack Developer
							</h2>
							<p class="mt-4 max-w-xs leading-normal text-slate-200">
								I'm a fast learner and self-taught.
							</p>
							<nav class="nav hidden lg:block" aria-label="In-page jump links">
								<ul class="mt-16 w-max">
									<li>
										<a
											class="group flex items-center py-3 active"
											href="#about">
											<span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
												About
											</span>
										</a>
									</li>
									<li>
										<a class="group flex items-center py-3" href="#education">
											<span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
												Education
											</span>
										</a>
									</li>
									<li>
										<a class="group flex items-center py-3" href="#experience">
											<span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
												Experience
											</span>
										</a>
									</li>
									<li>
										<a class="group flex items-center py-3" href="#projects">
											<span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
												Projects
											</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
							<li class="mr-5 text-xs">
								<a
									class="block hover:text-slate-200 text-slate-400"
									href="https://github.com/bchiang7"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="GitHub (opens in a new tab)"
									title="GitHub">
									<span class="sr-only">GitHub</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										class="h-6 w-6"
										aria-hidden="true">
										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
									</svg>
								</a>
							</li>
							<li class="mr-5 text-xs">
								<a
									class="block hover:text-slate-200 text-slate-400"
									href="https://www.linkedin.com/in/bchiang7/"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="LinkedIn (opens in a new tab)"
									title="LinkedIn">
									<span class="sr-only">LinkedIn</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="h-6 w-6"
										aria-hidden="true">
										<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
									</svg>
								</a>
							</li>
							<li class="mr-5 text-xs">
								<a
									class="block hover:text-slate-200 text-slate-400"
									href="https://instagram.com/bchiang7"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="Instagram (opens in a new tab)"
									title="Instagram">
									<span class="sr-only">Instagram</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 1000 1000"
										fill="currentColor"
										class="h-6 w-6"
										aria-hidden="true">
										<path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
									</svg>
								</a>
							</li>
							<li class="mr-5 text-xs">
								<a
									class="block hover:text-slate-200 text-slate-400"
									href="https://twitter.com/bchiang7"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="Twitter (opens in a new tab)"
									title="Twitter">
									<span class="sr-only">Twitter</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 248 204"
										fill="currentColor"
										class="h-6 w-6"
										aria-hidden="true">
										<path
											id="white_background"
											d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</header>
					<main id="content" class="pt-24 lg:w-1/2 lg:py-24">
						<section
							id="about"
							class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
							<div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
								<h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
									About
								</h2>
							</div>
							<div>
								<div className="text-slate-300 leading-7 mb-5">
									Hello, visitor! My name is Adi Siswanto. A passionate
									full-stack developer with a commitment to crafting solution
									for web applications. My journey in the world of technology
									began with a deep curiosity for both front-end and back-end
									development, and it has been an exhilarating ride ever since.
								</div>
								<div className="text-slate-300 leading-7">
									Lately, my focus is on working on projects at the company I
									work for and in my free time I usually learn how to make apps
									with best practice. Away from the computer, i enjoy hangout
									with my friend and reading book sometimes.
								</div>
							</div>
						</section>
						<section
							id="education"
							class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
							<div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
								<h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
									Education
								</h2>
							</div>
							<div class="mx-4">
								<ol class="relative border-l border-gray-200 dark:border-gray-700">
									<li class="ml-6 mb-10">
										<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-500 rounded-full ring-8 dark:bg-green-100 ring-light-bg-primary dark:ring-dark-bg-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												class="w-3 h-3">
												<path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"></path>
												<path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"></path>
												<path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
											</svg>
										</span>
										<h1 class="flex items-center mb-1 text-lg font-semibold text-slate-300 dark:text-dark-fg-primary">
											Harvard Univesity
										</h1>
										<p class="block mb-3 italic font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
											Informatics Engineering
										</p>
										<time class="block mb-3 text-sm font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
											2021 - Present
										</time>
									</li>
									<li class="ml-6">
										<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-500 rounded-full ring-8 dark:bg-green-100 ring-light-bg-primary dark:ring-dark-bg-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												class="w-3 h-3">
												<path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"></path>
												<path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"></path>
												<path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
											</svg>
										</span>
										<h1 class="flex items-center mb-1 text-lg font-semibold text-slate-300 dark:text-dark-fg-primary">
											SMKN N-Word Parungpanjang
										</h1>
										<p class="block mb-3 italic font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
											Software Engineering
										</p>
										<time class="block mb-3 text-sm font-normal leading-none text-slate-300 dark:text-dark-fg-secondary/75">
											2017 - 2020
										</time>
									</li>
								</ol>
							</div>
						</section>
						<section id="projects"></section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default Layout;
