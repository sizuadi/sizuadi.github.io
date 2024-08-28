import React, { useEffect, useRef, useState } from "react";
import { NavSocialMedia } from "./NavSocialMedia";
import { TypeAnimation } from "react-type-animation";
import { scrollTo } from "../utils";

const Nav = ({ observerRefs, menus }) => {
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const onClick = (key) => {
    setVisibleKey(key);
  };

  const observerCallback = async (e, key) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  useEffect(() => {
    if (observerRefs.current?.length && observers.current) {
      Array.from(menus.keys()).forEach((_u, key) => {
        observers.current[key] = new IntersectionObserver((e) =>
          observerCallback(e, key)
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
          <a href="/">Sizuadi</a>
        </h1>
        <p className="mt-2 max-w-xs text-xs leading-normal text-slate-200">
          Formerly known as Adi Siswanto.
        </p>
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
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {menus.map((item, key) => {
              if (item.id === "") {
                return (
                  <a
                    className="group flex items-center py-3 active cursor-pointer"
                    key={key}
                    href={item.link}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px group-hover:w-16 group-hover:bg-slate-200 transition-all duration-300 ease-in-out bg-slate-600 w-8 ${
                        key === visibleKey ? " bg-slate-200 w-16" : ""
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 text-slate-500`}
                    >
                      {item.text}
                    </span>
                  </a>
                );
              } else {
                return (
                  <li
                    className="group flex items-center py-3 active cursor-pointer"
                    key={key}
                    onClick={() => {
                      scrollTo({ id: item.id, duration: 1000 });
                      onClick(key);
                    }}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px group-hover:w-16 group-hover:bg-slate-200 transition-all duration-300 ease-in-out bg-slate-600 w-8 ${
                        key === visibleKey ? " bg-slate-200 w-16" : ""
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 text-slate-500`}
                    >
                      {item.text}
                    </span>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
      <NavSocialMedia />
    </header>
  );
};

export default Nav;
