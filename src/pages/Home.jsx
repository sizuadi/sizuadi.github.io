import React from "react";
import { TypeAnimation } from "react-type-animation";
function Home() {
	return (
		<div className="md:max-w-3xl md:mx-auto text-primary-dark">
			<div className="flex">
				<div className="w-full">
					<h1 className="text-5xl font-semibold text-center mt-5">
						Hello, Adi's Here
					</h1>
					<div className="text-xl font-medium text-center mt-3">
						<TypeAnimation
							sequence={[
								"Fullstack Developer",
								1000,
								"Self-taught Programmer",
								1000,
								"Informatics Engineering Student",
								1000,
								"Tech Enthusiast",
								1000,
							]}
							wrapper="span"
							speed={55}
							style={{ display: "inline-block" }}
							repeat={Infinity}
						/>
					</div>
					<div className="mt-8 text-justify text-md font-medium leading-8">
						Hi, my name is Adi Siswanto. I'm a Full Stack Developer, Informatics
						Engineering Student, Open Source Enthusiast, and I love competitive
						game xD.
					</div>
					<div className="mt-3 text-justify text-md font-medium leading-8">
						My main focus these days is building projects for my full-time work
						and some company. In my free time I've also learn and research to
						understand the best practice of programming. When I’m not at the
						computer, I’m usually playing game, reading a book/manga, or
						watching anime.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
